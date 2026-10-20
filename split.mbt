// 文本切行。
//
// 统一处理 LF / CRLF：按 `\n` 切分，并丢弃行尾的 `\r`。
// 末尾换行不会产生额外的空行，与 `diff` 的行为一致。

///|
fn split_lines(text : String) -> Array[String] {
  let lines : Array[String] = []
  if text.is_empty() {
    return lines
  }
  let buffer = StringBuilder()
  for c in text {
    if c == '\n' {
      lines.push(buffer.to_string())
      buffer.reset()
    } else if c != '\r' {
      buffer.write_char(c)
    }
  }
  if !text.has_suffix("\n") {
    lines.push(buffer.to_string())
  }
  lines
}

///|
fn chars_to_string(chars : Array[Char], start : Int, end : Int) -> String {
  let buffer = StringBuilder()
  let mut i = start
  while i < end && i < chars.length() {
    buffer.write_char(chars[i])
    i = i + 1
  }
  buffer.to_string()
}
