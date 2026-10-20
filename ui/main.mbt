// mbt-diffview 的 Web GUI（Rabbita）。
//
// 设计原则：GUI 只做输入和渲染，所有 diff 计算都调用核心库。

///|
struct Model {
  old_text : String
  new_text : String
  word_level : Bool
} derive(Eq)

///|
enum Msg {
  SetOld(String)
  SetNew(String)
  ToggleWord
  Swap
  LoadExample
}

///|
fn sample_old() -> String {
  "MoonBit is a modern language for AI and large-scale software.\nIt compiles to WebAssembly, JavaScript and native.\nThe type system catches mistakes early.\n"
}

///|
fn sample_new() -> String {
  "MoonBit is a modern language for AI and large software.\nIt compiles to WebAssembly, JavaScript and native.\nThe type system catches bugs early.\nA small diff viewer is included.\n"
}

///|
fn Model::initial() -> Model {
  { old_text: sample_old(), new_text: sample_new(), word_level: true, }
}

///|
fn update(model : Model, msg : Msg) -> Model {
  match msg {
    SetOld(text) =>
      {
        old_text: text,
        new_text: model.new_text,
        word_level: model.word_level,
      }
    SetNew(text) =>
      {
        old_text: model.old_text,
        new_text: text,
        word_level: model.word_level,
      }
    ToggleWord =>
      {
        old_text: model.old_text,
        new_text: model.new_text,
        word_level: !model.word_level,
      }
    Swap =>
      {
        old_text: model.new_text,
        new_text: model.old_text,
        word_level: model.word_level,
      }
    LoadExample =>
      {
        old_text: sample_old(),
        new_text: sample_new(),
        word_level: model.word_level,
      }
  }
}

///|
fn span_nodes(
  spans : Array[@core.WordSpan],
  fallback : String,
) -> Array[@html.Html] {
  if spans.length() == 0 {
    return [@html.span(class="plain", fallback)]
  }
  let nodes : Array[@html.Html] = []
  for span in spans {
    let class_name = match span.kind {
      @core.Equal => "eq"
      @core.Delete => "del"
      @core.Insert => "ins"
    }
    nodes.push(@html.span(class=class_name, span.text))
  }
  nodes
}

///|
fn number_text(value : Int?) -> String {
  match value {
    Some(number) => number.to_string()
    None => ""
  }
}

///|
fn render_rows(result : @core.DiffResult) -> Array[@html.Html] {
  let rows : Array[@html.Html] = []
  for row in result.rows {
    let class_name = match row.kind {
      @core.Equal => "row equal"
      @core.Delete => "row delete"
      @core.Insert => "row insert"
      @core.Change => "row change"
    }
    rows.push(
      @html.div(class=class_name, [
        @html.div(class="no", number_text(row.old_no)),
        @html.div(class="old", span_nodes(row.old_spans, text_of(row.old_line))),
        @html.div(class="no", number_text(row.new_no)),
        @html.div(class="new", span_nodes(row.new_spans, text_of(row.new_line))),
      ]),
    )
  }
  rows
}

///|
fn text_of(value : String?) -> String {
  match value {
    Some(text) => text
    None => ""
  }
}

///|
fn app() -> @rabbita.Val[@html.Html] {
  let (model, emit) = @rabbita.create_pure_state(Model::initial(), update~)
  model.view(model => {
    let options = @core.DiffOptions::create(@core.Myers, 3, model.word_level)
    let result = @core.diff_text(model.old_text, model.new_text, options)
    @html.div(class="page", [
      @html.div(class="hero", [
        @html.h1("mbt-diffview"),
        @html.p(
          "纯 MoonBit 实现的文本 Diff 查看器：行级差异 + 词级高亮 + 统一补丁统计。",
        ),
      ]),
      @html.div(class="editors", [
        @html.div(class="pane", [
          @html.div(class="pane-title", "旧文本"),
          @html.textarea(
            class="editor",
            rows=10,
            value=model.old_text,
            on_input=fn(text) { emit(SetOld(text)) },
            "",
          ),
        ]),
        @html.div(class="pane", [
          @html.div(class="pane-title", "新文本"),
          @html.textarea(
            class="editor",
            rows=10,
            value=model.new_text,
            on_input=fn(text) { emit(SetNew(text)) },
            "",
          ),
        ]),
      ]),
      @html.div(class="toolbar", [
        @html.button(on_click=emit(ToggleWord), "词级高亮"),
        @html.button(on_click=emit(Swap), "交换"),
        @html.button(on_click=emit(LoadExample), "载入示例"),
        @html.span(
          class="stats",
          "+\{result.stats.added}  -\{result.stats.removed}  ~\{result.stats.changed}  =\{result.stats.unchanged}",
        ),
      ]),
      @html.div(class="diff", render_rows(result)),
    ])
  })
}

///|
fn main {
  @rabbita.new(app).mount("app")
}
