// 黑盒测试：只通过公开 API 使用本库。

///|
fn concat_spans(spans : Array[@Mr-Houjie/mbt-diffview.WordSpan]) -> String {
  let builder = StringBuilder()
  for span in spans {
    builder.write_string(span.text)
  }
  builder.to_string()
}

///|
test "conformance: 全部内置语料通过" {
  let failures = @Mr-Houjie/mbt-diffview.run_conformance()
  for failure in failures {
    println("FAIL \{failure}")
  }
  assert_eq(failures.length(), 0)
  assert_true(@Mr-Houjie/mbt-diffview.conformance_case_count() >= 15)
}

///|
test "词级差异可还原原行" {
  let result = @Mr-Houjie/mbt-diffview.diff_text(
    "hello world\n",
    "hello moon\n",
    @Mr-Houjie/mbt-diffview.DiffOptions::new(),
  )
  let mut checked = false
  for row in result.rows {
    if row.old_spans.length() > 0 {
      assert_eq(concat_spans(row.old_spans), "hello world")
      assert_eq(concat_spans(row.new_spans), "hello moon")
      checked = true
    }
  }
  assert_true(checked)
}

///|
test "HTML 转义与统计" {
  let result = @Mr-Houjie/mbt-diffview.diff_text(
    "<script>alert(1)</script>\n",
    "safe\n",
    @Mr-Houjie/mbt-diffview.DiffOptions::new(),
  )
  let html = @Mr-Houjie/mbt-diffview.render_html(result, "old", "new")
  assert_true(html.contains("&lt;"))
  assert_true(html.contains("&gt;"))
  assert_true(html.contains("script"))
  assert_true(!html.contains("<script>alert(1)</script>"))
  assert_true(html.contains("mbt-diffview"))
  let json = @Mr-Houjie/mbt-diffview.render_json(result)
  assert_true(json.contains("\"stats\""))
  assert_true(json.contains("\"rows\""))
  assert_true(json.contains("\"changed\":1"))
}

///|
test "相同文本与 Patience" {
  let same = @Mr-Houjie/mbt-diffview.diff_text(
    "a\nb\n",
    "a\nb\n",
    @Mr-Houjie/mbt-diffview.DiffOptions::new(),
  )
  assert_true(!@Mr-Houjie/mbt-diffview.is_different(same))
  let options = @Mr-Houjie/mbt-diffview.DiffOptions::create(
    @Mr-Houjie/mbt-diffview.Patience,
    1,
    false,
  )
  let patience = @Mr-Houjie/mbt-diffview.diff_text("a\nb\n", "a\nc\n", options)
  assert_eq(patience.stats.changed, 1)
  assert_eq(patience.stats.unchanged, 1)
}

///|
test "任意文本输入不 panic（固定种子 fuzz）" {
  let mut state = 20261020
  let mut round = 0
  while round < 300 {
    let old = StringBuilder()
    let new = StringBuilder()
    let mut i = 0
    while i < 6 {
      state = state * 48271 % 2147483647
      match state % 3 {
        0 => old.write_string("abc")
        1 => old.write_string("中文")
        _ => old.write_string("x,y")
      }
      state = state * 48271 % 2147483647
      match state % 3 {
        0 => new.write_string("abc")
        1 => new.write_string("月亮")
        _ => new.write_string("x;y")
      }
      old.write_string("\n")
      new.write_string("\n")
      i = i + 1
    }
    let result = @Mr-Houjie/mbt-diffview.diff_text(
      old.to_string(),
      new.to_string(),
      @Mr-Houjie/mbt-diffview.DiffOptions::new(),
    )
    assert_true(result.rows.length() > 0)
    round = round + 1
  }
}

///|
test "统一补丁与 HTML 行结构" {
  let result = @Mr-Houjie/mbt-diffview.diff_text(
    "a\nb\n",
    "a\nc\n",
    @Mr-Houjie/mbt-diffview.DiffOptions::new(),
  )
  assert_true(result.patch.contains("@@ -1,2 +1,2 @@"))
  assert_true(result.patch.contains("-b"))
  assert_true(result.patch.contains("+c"))
  let html = @Mr-Houjie/mbt-diffview.render_html(result, "old", "new")
  assert_true(html.contains("<tr class=\"change\">"))
}

///|
test "超长行回退为整行高亮" {
  let old_builder = StringBuilder()
  let new_builder = StringBuilder()
  let mut i = 0
  while i < 2500 {
    old_builder.write_string("a")
    new_builder.write_string("b")
    i = i + 1
  }
  let result = @Mr-Houjie/mbt-diffview.diff_text(
    old_builder.to_string() + "\n",
    new_builder.to_string() + "\n",
    @Mr-Houjie/mbt-diffview.DiffOptions::new(),
  )
  let mut has_spans = false
  for row in result.rows {
    if row.old_spans.length() > 0 {
      has_spans = true
    }
  }
  assert_true(!has_spans)
}

///|
test "JSON 单边行使用 null 行号" {
  let result = @Mr-Houjie/mbt-diffview.diff_text(
    "a\n",
    "a\nb\n",
    @Mr-Houjie/mbt-diffview.DiffOptions::new(),
  )
  let json = @Mr-Houjie/mbt-diffview.render_json(result)
  assert_true(json.contains("\"oldNo\":null"))
}
