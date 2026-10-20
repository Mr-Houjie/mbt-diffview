// 真实语料黄金测试：读取 tests/fixtures 下的文件对，对比统计结果。

///|
fn split_char(text : String, separator : Char) -> Array[String] {
  let parts : Array[String] = []
  let buffer = StringBuilder()
  for c in text {
    if c == separator {
      parts.push(buffer.to_string())
      buffer.reset()
    } else {
      buffer.write_char(c)
    }
  }
  parts.push(buffer.to_string())
  parts
}

///|
fn parse_int(raw : String) -> Int? {
  if raw.is_empty() {
    return None
  }
  let mut value = 0
  for c in raw {
    if !c.is_ascii_digit() {
      return None
    }
    value = value * 10 + (c.to_int() - 48)
  }
  Some(value)
}

///|
fn read_text(path : String) -> Result[String, String] {
  Ok(@fs.read_file_to_string(path)) catch { _ => Err("读取失败: \{path}") }
}

///|
fn main {
  let manifest = match read_text("tests/fixtures/manifest.txt") {
    Ok(text) => text
    Err(message) => {
      println(message)
      @sys.exit(2)
      ""
    }
  }
  let failures : Array[String] = []
  let mut total = 0
  for line in split_char(manifest, '\n') {
    if line.trim().is_empty() {
      continue
    }
    let fields = split_char(line.trim().to_owned(), '|')
    if fields.length() != 6 {
      failures.push("manifest 格式错误: \{line}")
      continue
    }
    let old_file = "tests/fixtures/" + fields[0]
    let new_file = "tests/fixtures/" + fields[1]
    let old_text = match read_text(old_file) {
      Ok(text) => text
      Err(message) => {
        failures.push(message)
        ""
      }
    }
    let new_text = match read_text(new_file) {
      Ok(text) => text
      Err(message) => {
        failures.push(message)
        ""
      }
    }
    let expected_added = parse_int(fields[2])
    let expected_removed = parse_int(fields[3])
    let expected_changed = parse_int(fields[4])
    let expected_unchanged = parse_int(fields[5])
    let result = @lib.diff_text(
      old_text,
      new_text,
      @lib.DiffOptions::new(),
    )
    total = total + 1
    match (expected_added, expected_removed, expected_changed, expected_unchanged) {
      (Some(a), Some(r), Some(c), Some(u)) =>
        if result.stats.added != a ||
          result.stats.removed != r ||
          result.stats.changed != c ||
          result.stats.unchanged != u {
          failures.push(
            "\{fields[0]}: expected +\{a} -\{r} ~\{c} =\{u}, got +\{result.stats.added} -\{result.stats.removed} ~\{result.stats.changed} =\{result.stats.unchanged}",
          )
        }
      _ => failures.push("\{fields[0]}: manifest 数字无效")
    }
  }
  if failures.length() == 0 {
    println("golden: \{total} fixtures passed")
    @sys.exit(0)
  } else {
    for failure in failures {
      println("FAIL \{failure}")
    }
    println("golden: \{failures.length()} / \{total} failed")
    @sys.exit(1)
  }
}
