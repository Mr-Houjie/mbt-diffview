// 一致性语料：行级 diff 统计的单一事实来源。
//
// `moon test` 与 `cmd/verify` 共用同一份用例。

///|
priv struct Case {
  name : String
  old : String
  new : String
  added : Int
  removed : Int
  changed : Int
  unchanged : Int
}

///|
fn case(
  name : String,
  old : String,
  new : String,
  added : Int,
  removed : Int,
  changed : Int,
  unchanged : Int,
) -> Case {
  { name, old, new, added, removed, changed, unchanged, }
}

///|
fn make_cases() -> Array[Case] {
  [
    case("identical", "a\nb\nc\n", "a\nb\nc\n", 0, 0, 0, 3),
    case("replace-middle", "a\nb\nc\n", "a\nx\nc\n", 0, 0, 1, 2),
    case("add-end", "a\nb\n", "a\nb\nc\n", 1, 0, 0, 2),
    case("delete-middle", "a\nb\nc\n", "a\nc\n", 0, 1, 0, 2),
    case("crlf", "a\r\nb\r\nc\r\n", "a\nb\nc\n", 0, 0, 0, 3),
    case("empty-to-one", "", "a\n", 1, 0, 0, 0),
    case("one-to-empty", "a\n", "", 0, 1, 0, 0),
    case("empty-both", "", "", 0, 0, 0, 0),
    case("replace-two", "a\nb\nc\n", "a\nx\ny\n", 0, 0, 2, 1),
    case("add-two", "a\n", "a\nb\nc\n", 2, 0, 0, 1),
    case("delete-two", "a\nb\nc\n", "a\n", 0, 2, 0, 1),
    case("one-to-three", "a\nb\n", "a\nx\ny\nz\n", 2, 0, 1, 1),
    case("three-to-one", "a\nx\ny\nz\n", "a\nb\n", 0, 2, 1, 1),
    case("chinese-change", "你好\n世界\n", "你好\n月亮\n", 0, 0, 1, 1),
    case("blank-lines", "a\n\nb\n", "a\n\n\nb\n", 1, 0, 0, 3),
    case("trailing-newline-ignored", "a\n", "a", 0, 0, 0, 1),
  ]
}

///|
/// 一致性语料总条数。
pub fn conformance_case_count() -> Int {
  22
}

///|
fn check(failures : Array[String], name : String, condition : Bool) -> Unit {
  if !condition {
    failures.push(name)
  }
}

///|
/// 运行一致性语料，返回失败描述（空数组表示全部通过）。
pub fn run_conformance() -> Array[String] {
  let failures : Array[String] = []
  for item in make_cases() {
    let result = diff_text(item.old, item.new, DiffOptions::new())
    let stats = result.stats
    if stats.added != item.added ||
      stats.removed != item.removed ||
      stats.changed != item.changed ||
      stats.unchanged != item.unchanged {
      failures.push(
        "\{item.name}: expected +\{item.added} -\{item.removed} ~\{item.changed} =\{item.unchanged}, got +\{stats.added} -\{stats.removed} ~\{stats.changed} =\{stats.unchanged}",
      )
    }
  }
  let change = diff_text("a\nb\n", "a\nc\n", DiffOptions::new())
  check(failures, "patch: 头", change.patch.contains("@@ -1,2 +1,2 @@"))
  check(failures, "patch: 删除行", change.patch.contains("-b"))
  check(failures, "patch: 插入行", change.patch.contains("+c"))
  check(
    failures,
    "html: change 行",
    render_html(change, "old", "new").contains("<tr class=\"change\">"),
  )
  let long_old = StringBuilder()
  let long_new = StringBuilder()
  let mut i = 0
  while i < 2500 {
    long_old.write_string("a")
    long_new.write_string("b")
    i = i + 1
  }
  let long_result = diff_text(
    long_old.to_string() + "\n",
    long_new.to_string() + "\n",
    DiffOptions::new(),
  )
  let mut has_spans = false
  for row in long_result.rows {
    if row.old_spans.length() > 0 {
      has_spans = true
    }
  }
  check(failures, "long-line: 回退整行", !has_spans)
  let json = render_json(diff_text("a\n", "a\nb\n", DiffOptions::new()))
  check(failures, "json: 单边行 null", json.contains("\"oldNo\":null"))
  failures
}
