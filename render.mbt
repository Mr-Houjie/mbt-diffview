// 输出渲染：text / json / html。

///|
fn text_of(value : String?) -> String {
  match value {
    Some(text) => text
    None => ""
  }
}

///|
fn number_of(value : Int?) -> String {
  match value {
    Some(number) => number.to_string()
    None => ""
  }
}

///|
fn json_number(value : Int?) -> String {
  match value {
    Some(number) => number.to_string()
    None => "null"
  }
}

///|
fn json_escape(s : String) -> String {
  let builder = StringBuilder()
  for c in s {
    match c {
      '"' => builder.write_string("\\\"")
      '\\' => builder.write_string("\\\\")
      '\n' => builder.write_string("\\n")
      '\r' => builder.write_string("\\r")
      '\t' => builder.write_string("\\t")
      _ => {
        let code = c.to_int()
        if code < 32 {
          builder.write_string("\\u")
          builder.write_string(hex4(code))
        } else {
          builder.write_char(c)
        }
      }
    }
  }
  builder.to_string()
}

///|
fn hex4(n : Int) -> String {
  let digits = "0123456789abcdef"
  let builder = StringBuilder()
  let mut shift = 12
  while shift >= 0 {
    let digit = (n >> shift) & 15
    match digits.get_char(digit) {
      Some(c) => builder.write_char(c)
      None => ()
    }
    shift = shift - 4
  }
  builder.to_string()
}

///|
fn html_escape(s : String) -> String {
  let builder = StringBuilder()
  for c in s {
    match c {
      '&' => builder.write_string("&amp;")
      '<' => builder.write_string("&lt;")
      '>' => builder.write_string("&gt;")
      '"' => builder.write_string("&quot;")
      '\'' => builder.write_string("&#39;")
      _ => builder.write_char(c)
    }
  }
  builder.to_string()
}

///|
/// 渲染为纯文本（`-` / `+` 前缀）。
pub fn render_text(result : DiffResult) -> String {
  let builder = StringBuilder()
  for row in result.rows {
    match row.kind {
      Equal => {
        builder.write_string("  ")
        builder.write_string(text_of(row.old_line))
        builder.write_string("\n")
      }
      Delete => {
        builder.write_string("- ")
        builder.write_string(text_of(row.old_line))
        builder.write_string("\n")
      }
      Insert => {
        builder.write_string("+ ")
        builder.write_string(text_of(row.new_line))
        builder.write_string("\n")
      }
      Change => {
        builder.write_string("- ")
        builder.write_string(text_of(row.old_line))
        builder.write_string("\n+ ")
        builder.write_string(text_of(row.new_line))
        builder.write_string("\n")
      }
    }
  }
  builder.to_string()
}

///|
/// 渲染为单行 JSON。
pub fn render_json(result : DiffResult) -> String {
  let builder = StringBuilder()
  builder.write_string("{\"stats\":{\"added\":")
  builder.write_string(result.stats.added.to_string())
  builder.write_string(",\"removed\":")
  builder.write_string(result.stats.removed.to_string())
  builder.write_string(",\"changed\":")
  builder.write_string(result.stats.changed.to_string())
  builder.write_string(",\"unchanged\":")
  builder.write_string(result.stats.unchanged.to_string())
  builder.write_string("},\"rows\":[")
  let mut first = true
  for row in result.rows {
    if !first {
      builder.write_string(",")
    }
    let kind = match row.kind {
      Equal => "equal"
      Delete => "delete"
      Insert => "insert"
      Change => "change"
    }
    builder.write_string("{\"kind\":\"\{kind}\",\"old\":\"")
    builder.write_string(json_escape(text_of(row.old_line)))
    builder.write_string("\",\"new\":\"")
    builder.write_string(json_escape(text_of(row.new_line)))
    builder.write_string("\",\"oldNo\":")
    builder.write_string(json_number(row.old_no))
    builder.write_string(",\"newNo\":")
    builder.write_string(json_number(row.new_no))
    builder.write_string("}")
    first = false
  }
  builder.write_string("],\"patch\":\"")
  builder.write_string(json_escape(result.patch))
  builder.write_string("\"}")
  builder.to_string()
}

///|
fn render_spans(spans : Array[WordSpan], fallback : String) -> String {
  if spans.length() == 0 {
    return html_escape(fallback)
  }
  let builder = StringBuilder()
  for span in spans {
    let class_name = match span.kind {
      Equal => "eq"
      Delete => "del"
      Insert => "ins"
    }
    builder.write_string("<span class=\"\{class_name}\">")
    builder.write_string(html_escape(span.text))
    builder.write_string("</span>")
  }
  builder.to_string()
}

///|
/// 渲染为独立 HTML 页面（左右对照）。
pub fn render_html(
  result : DiffResult,
  old_name : String,
  new_name : String,
) -> String {
  let builder = StringBuilder()
  builder.write_string(
    "<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n<meta charset=\"utf-8\">\n",
  )
  builder.write_string("<title>mbt-diffview</title>\n<style>\n")
  builder.write_string(
    "body{font-family:ui-monospace,Menlo,Consolas,monospace;margin:0;background:#0f1115;color:#d8dee9}\n",
  )
  builder.write_string(
    "header{padding:16px 20px;border-bottom:1px solid #2a2f3a;display:flex;gap:24px;align-items:baseline}\n",
  )
  builder.write_string("h1{font-size:16px;margin:0}\n")
  builder.write_string(".stats{font-size:13px;color:#9aa4b2}\n")
  builder.write_string(
    ".add{color:#6cc070}.del{color:#e06c75}.chg{color:#e5c07b}\n",
  )
  builder.write_string(
    "table{border-collapse:collapse;width:100%;table-layout:fixed}\n",
  )
  builder.write_string(
    "td{vertical-align:top;padding:2px 8px;white-space:pre-wrap;word-break:break-all}\n",
  )
  builder.write_string(
    "td.no{width:48px;color:#5c6370;text-align:right;user-select:none;border-right:1px solid #2a2f3a}\n",
  )
  builder.write_string("tr.equal td{background:#12151b}\n")
  builder.write_string("tr.delete td.old{background:#3a1d22}\n")
  builder.write_string("tr.insert td.new{background:#17301f}\n")
  builder.write_string("tr.change td.old{background:#3a1d22}\n")
  builder.write_string("tr.change td.new{background:#17301f}\n")
  builder.write_string(".del{background:#7a2c35;border-radius:2px}\n")
  builder.write_string(".ins{background:#2c6b3f;border-radius:2px}\n")
  builder.write_string(
    "</style>\n</head>\n<body>\n<header>\n<h1>mbt-diffview</h1>\n",
  )
  builder.write_string("<div class=\"stats\">")
  builder.write_string("<span class=\"add\">+\{result.stats.added}</span> ")
  builder.write_string("<span class=\"del\">-\{result.stats.removed}</span> ")
  builder.write_string("<span class=\"chg\">~\{result.stats.changed}</span> ")
  builder.write_string("=\{result.stats.unchanged}")
  builder.write_string("</div>\n</header>\n<table>\n")
  builder.write_string(
    "<colgroup><col style=\"width:48px\"><col><col style=\"width:48px\"><col></colgroup>\n",
  )
  builder.write_string(
    "<thead><tr><td class=\"no\"></td><td>\{html_escape(old_name)}</td><td class=\"no\"></td><td>\{html_escape(new_name)}</td></tr></thead>\n<tbody>\n",
  )
  for row in result.rows {
    let class_name = match row.kind {
      Equal => "equal"
      Delete => "delete"
      Insert => "insert"
      Change => "change"
    }
    builder.write_string("<tr class=\"\{class_name}\">")
    builder.write_string("<td class=\"no\">\{number_of(row.old_no)}</td>")
    builder.write_string("<td class=\"old\">")
    builder.write_string(render_spans(row.old_spans, text_of(row.old_line)))
    builder.write_string("</td>")
    builder.write_string("<td class=\"no\">\{number_of(row.new_no)}</td>")
    builder.write_string("<td class=\"new\">")
    builder.write_string(render_spans(row.new_spans, text_of(row.new_line)))
    builder.write_string("</td></tr>\n")
  }
  builder.write_string("</tbody>\n</table>\n</body>\n</html>\n")
  builder.to_string()
}
