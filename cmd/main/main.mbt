// mbt-diffview 命令行入口。

///|
const VERSION : String = "0.1.0"

///|
fn usage() -> String {
  let s = StringBuilder()
  s.write_string("mbt-diffview \{VERSION} — 文本 Diff 查看器\n\n")
  s.write_string("用法:\n  mbt-diffview [选项] <旧文件> <新文件>\n\n")
  s.write_string("选项:\n")
  s.write_string("  --format <text|json|html>  输出格式（默认 text）\n")
  s.write_string(
    "  --algorithm <myers|patience>  行级 diff 算法（默认 myers）\n",
  )
  s.write_string(
    "  --context <n>              unified patch 上下文行数（默认 3）\n",
  )
  s.write_string("  --no-word-level           关闭词级高亮\n")
  s.write_string(
    "  --output <路径>            写入文件而不是标准输出\n",
  )
  s.write_string("  -v, --version             显示版本\n")
  s.write_string("  -h, --help                显示本帮助\n\n")
  s.write_string(
    "退出码:\n  0  两份文本相同\n  1  存在差异\n  2  用法错误或读写失败\n",
  )
  s.to_string()
}

///|
struct Options {
  mut old_path : String?
  mut new_path : String?
  mut format : String
  mut algorithm : @lib.Algorithm
  mut context : Int
  mut word_level : Bool
  mut output : String?
  mut help : Bool
  mut version : Bool
}

///|
fn Options::new() -> Options {
  {
    old_path: None,
    new_path: None,
    format: "text",
    algorithm: @lib.Myers,
    context: 3,
    word_level: true,
    output: None,
    help: false,
    version: false,
  }
}

///|
fn output(text : String) -> Unit {
  let chars = text.iter().to_array()
  let mut n = chars.length()
  while n > 0 && (chars[n - 1] == '\n' || chars[n - 1] == '\r') {
    n = n - 1
  }
  if n == 0 {
    return
  }
  let buffer = StringBuilder()
  for i = 0; i < n; i = i + 1 {
    buffer.write_char(chars[i])
  }
  println(buffer.to_string())
}

///|
fn usage_error(message : String) -> Unit {
  println("错误: \{message}")
  println("")
  output(usage())
  @sys.exit(2)
}

///|
fn next_arg(args : Array[String], i : Int, name : String) -> String {
  if i + 1 >= args.length() {
    usage_error("\{name} 需要一个参数")
  }
  args[i + 1]
}

///|
fn parse_uint(raw : String, name : String) -> Int {
  if raw.is_empty() {
    usage_error("\{name} 需要非负整数")
  }
  let mut value = 0
  for c in raw {
    if !c.is_ascii_digit() {
      usage_error("\{name} 需要非负整数，收到「\{raw}」")
    }
    value = value * 10 + (c.to_int() - 48)
  }
  value
}

///|
fn parse_algorithm(value : String) -> @lib.Algorithm {
  match value {
    "myers" => @lib.Myers
    "patience" => @lib.Patience
    _ => {
      usage_error("--algorithm 只支持 myers / patience")
      @lib.Myers
    }
  }
}

///|
fn parse_args(args : Array[String]) -> Options {
  let options = Options::new()
  let positional : Array[String] = []
  let mut i = 1
  while i < args.length() {
    let arg = args[i]
    match arg {
      "--format" => {
        options.format = next_arg(args, i, "--format")
        i = i + 1
      }
      "--algorithm" => {
        options.algorithm = parse_algorithm(next_arg(args, i, "--algorithm"))
        i = i + 1
      }
      "--context" => {
        options.context = parse_uint(
          next_arg(args, i, "--context"),
          "--context",
        )
        i = i + 1
      }
      "--no-word-level" => options.word_level = false
      "--output" => {
        options.output = Some(next_arg(args, i, "--output"))
        i = i + 1
      }
      "--help" | "-h" => options.help = true
      "--version" | "-v" => options.version = true
      _ =>
        if arg.has_prefix("-") {
          usage_error("未知选项「\{arg}」")
        } else {
          positional.push(arg)
        }
    }
    i = i + 1
  }
  if options.format != "text" &&
    options.format != "json" &&
    options.format != "html" {
    usage_error("--format 只支持 text / json / html")
  }
  if positional.length() > 0 {
    options.old_path = Some(positional[0])
  }
  if positional.length() > 1 {
    options.new_path = Some(positional[1])
  }
  if positional.length() > 2 {
    usage_error("只接受两个文件参数")
  }
  options
}

///|
fn read_text(path : String) -> Result[String, String] {
  Ok(@fs.read_file_to_string(path)) catch {
    _ => Err("读取文件失败")
  }
}

///|
fn main {
  let args = @env.args()
  let options = parse_args(args)
  if options.help {
    output(usage())
    @sys.exit(0)
    return
  }
  if options.version {
    println("mbt-diffview \{VERSION}")
    @sys.exit(0)
    return
  }
  let old_path = match options.old_path {
    Some(path) => path
    None => {
      usage_error("缺少旧文件参数")
      ""
    }
  }
  let new_path = match options.new_path {
    Some(path) => path
    None => {
      usage_error("缺少新文件参数")
      ""
    }
  }
  let old_text = match read_text(old_path) {
    Ok(text) => text
    Err(message) => {
      println("无法读取「\{old_path}」: \{message}")
      @sys.exit(2)
      ""
    }
  }
  let new_text = match read_text(new_path) {
    Ok(text) => text
    Err(message) => {
      println("无法读取「\{new_path}」: \{message}")
      @sys.exit(2)
      ""
    }
  }
  let diff_options = @lib.DiffOptions::create(
    options.algorithm,
    options.context,
    options.word_level,
  )
  let result = @lib.diff_text(old_text, new_text, diff_options)
  let rendered = match options.format {
    "json" => @lib.render_json(result)
    "html" => @lib.render_html(result, old_path, new_path)
    _ => @lib.render_text(result)
  }
  match options.output {
    Some(path) =>
      @fs.write_string_to_file(path, rendered) catch {
        _ => {
          println("无法写入「\{path}」")
          @sys.exit(2)
        }
      }
    None => output(rendered)
  }
  if @lib.is_different(result) {
    @sys.exit(1)
  } else {
    @sys.exit(0)
  }
}
