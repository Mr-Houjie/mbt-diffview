// 词级（字符级）差异。
//
// 使用官方 `moonbitlang/core/diff` 的 Levenshtein 编辑脚本，
// 对中文、英文、标点都按字符处理，不依赖分词器。

///|
fn word_spans(
  old_line : String,
  new_line : String,
) -> (Array[WordSpan], Array[WordSpan]) {
  let old_chars = old_line.iter().to_array()
  let new_chars = new_line.iter().to_array()
  let script = @diff.levenshtein_edits(old=old_chars[:], new=new_chars[:])
  let old_spans : Array[WordSpan] = []
  let new_spans : Array[WordSpan] = []
  for edit in script {
    match edit {
      @diff.Equal(old_index~, new_index~, len~) => {
        old_spans.push({
          kind: Equal,
          text: chars_to_string(old_chars, old_index, old_index + len),
        })
        new_spans.push({
          kind: Equal,
          text: chars_to_string(new_chars, new_index, new_index + len),
        })
      }
      @diff.Delete(old_index~, old_len~, ..) =>
        old_spans.push({
          kind: Delete,
          text: chars_to_string(old_chars, old_index, old_index + old_len),
        })
      @diff.Insert(new_index~, new_len~, ..) =>
        new_spans.push({
          kind: Insert,
          text: chars_to_string(new_chars, new_index, new_index + new_len),
        })
      @diff.Replace(old_index~, new_index~, len~) => {
        old_spans.push({
          kind: Delete,
          text: chars_to_string(old_chars, old_index, old_index + len),
        })
        new_spans.push({
          kind: Insert,
          text: chars_to_string(new_chars, new_index, new_index + len),
        })
      }
    }
  }
  (old_spans, new_spans)
}
