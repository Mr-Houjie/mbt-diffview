// 行级 diff 引擎：把官方 core/diff 的编辑脚本转换为左右对照行。

///|
fn equal_row(
  old_line : String,
  new_line : String,
  old_no : Int,
  new_no : Int,
) -> Row {
  {
    kind: Equal,
    old_line: Some(old_line),
    new_line: Some(new_line),
    old_spans: [],
    new_spans: [],
    old_no: Some(old_no),
    new_no: Some(new_no),
  }
}

///|
fn delete_row(line : String, number : Int) -> Row {
  {
    kind: Delete,
    old_line: Some(line),
    new_line: None,
    old_spans: [],
    new_spans: [],
    old_no: Some(number),
    new_no: None,
  }
}

///|
fn insert_row(line : String, number : Int) -> Row {
  {
    kind: Insert,
    old_line: None,
    new_line: Some(line),
    old_spans: [],
    new_spans: [],
    old_no: None,
    new_no: Some(number),
  }
}

///|
fn change_row(
  old_line : String,
  new_line : String,
  old_no : Int,
  new_no : Int,
  word_level : Bool,
) -> Row {
  // 超长行不做字符级 diff：Levenshtein 是 O(n*m)，避免 GUI 逐键输入时卡顿。
  let (old_spans, new_spans) = if word_level &&
    old_line.length() <= 2000 &&
    new_line.length() <= 2000 {
    word_spans(old_line, new_line)
  } else {
    ([], [])
  }
  {
    kind: Change,
    old_line: Some(old_line),
    new_line: Some(new_line),
    old_spans,
    new_spans,
    old_no: Some(old_no),
    new_no: Some(new_no),
  }
}

///|
fn build_rows(
  old_lines : Array[String],
  new_lines : Array[String],
  edits : ArrayView[@diff.Edit],
  word_level : Bool,
) -> Array[Row] {
  let rows : Array[Row] = []
  let mut i = 0
  while i < edits.length() {
    match edits[i] {
      @diff.Equal(old_index~, new_index~, len~) => {
        let mut k = 0
        while k < len {
          rows.push(
            equal_row(
              old_lines[old_index + k],
              new_lines[new_index + k],
              old_index + k + 1,
              new_index + k + 1,
            ),
          )
          k = k + 1
        }
        i = i + 1
      }
      @diff.Delete(old_index~, old_len~, ..) => {
        let mut paired = false
        if i + 1 < edits.length() {
          match edits[i + 1] {
            @diff.Insert(new_index~, new_len~, ..) => {
              let pair_count = if old_len < new_len { old_len } else { new_len }
              let mut k = 0
              while k < pair_count {
                rows.push(
                  change_row(
                    old_lines[old_index + k],
                    new_lines[new_index + k],
                    old_index + k + 1,
                    new_index + k + 1,
                    word_level,
                  ),
                )
                k = k + 1
              }
              while k < old_len {
                rows.push(
                  delete_row(old_lines[old_index + k], old_index + k + 1),
                )
                k = k + 1
              }
              while k < new_len {
                rows.push(
                  insert_row(new_lines[new_index + k], new_index + k + 1),
                )
                k = k + 1
              }
              i = i + 2
              paired = true
            }
            _ => ()
          }
        }
        if !paired {
          let mut k = 0
          while k < old_len {
            rows.push(delete_row(old_lines[old_index + k], old_index + k + 1))
            k = k + 1
          }
          i = i + 1
        }
      }
      @diff.Insert(new_index~, new_len~, ..) => {
        let mut k = 0
        while k < new_len {
          rows.push(insert_row(new_lines[new_index + k], new_index + k + 1))
          k = k + 1
        }
        i = i + 1
      }
    }
  }
  rows
}

///|
fn compute_stats(rows : Array[Row]) -> DiffStats {
  let mut added = 0
  let mut removed = 0
  let mut changed = 0
  let mut unchanged = 0
  for row in rows {
    match row.kind {
      Equal => unchanged = unchanged + 1
      Delete => removed = removed + 1
      Insert => added = added + 1
      Change => changed = changed + 1
    }
  }
  { added, removed, changed, unchanged, }
}

///|
/// 计算两份文本的差异。
pub fn diff_text(
  old_text : String,
  new_text : String,
  options : DiffOptions,
) -> DiffResult {
  let old_lines = split_lines(old_text)
  let new_lines = split_lines(new_text)
  let algorithm = match options.algorithm {
    Myers => @diff.Myers
    Patience => @diff.Patience
  }
  let comparison = @diff.Diff(old=old_lines[:], new=new_lines[:], algorithm~)
  let rows = build_rows(
    old_lines,
    new_lines,
    comparison.edits(),
    options.word_level,
  )
  let patch_builder = StringBuilder()
  for hunk in comparison.group(context=options.context) {
    patch_builder.write_string(hunk.render(show=fn(line : String) { line }))
  }
  { rows, stats: compute_stats(rows), patch: patch_builder.to_string(), }
}
