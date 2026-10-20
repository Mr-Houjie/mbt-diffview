// 公共数据类型。

///|
/// 行级 diff 使用的算法。
pub(all) enum Algorithm {
  Myers
  Patience
}

///|
/// 一行在左右对照视图中的角色。
pub enum RowKind {
  Equal
  Delete
  Insert
  Change
}

///|
/// 词级高亮的片段角色。
pub enum SpanKind {
  Equal
  Delete
  Insert
}

///|
/// 词级（字符级）差异片段。
pub struct WordSpan {
  kind : SpanKind
  text : String
}

///|
/// 左右对照视图中的一行。
pub struct Row {
  kind : RowKind
  old_line : String?
  new_line : String?
  old_spans : Array[WordSpan]
  new_spans : Array[WordSpan]
  old_no : Int?
  new_no : Int?
}

///|
/// 差异统计。
pub struct DiffStats {
  added : Int
  removed : Int
  changed : Int
  unchanged : Int
}

///|
/// 一次 diff 的完整结果。
pub struct DiffResult {
  rows : Array[Row]
  stats : DiffStats
  /// 标准 unified diff 文本
  patch : String
}

///|
/// diff 选项。
pub struct DiffOptions {
  algorithm : Algorithm
  /// unified patch 的上下文行数
  context : Int
  /// 是否计算词级（字符级）高亮
  word_level : Bool
}

///|
pub fn DiffOptions::new() -> DiffOptions {
  { algorithm: Myers, context: 3, word_level: true, }
}

///|
/// 用显式参数构造选项。
pub fn DiffOptions::create(
  algorithm : Algorithm,
  context : Int,
  word_level : Bool,
) -> DiffOptions {
  { algorithm, context, word_level, }
}

///|
/// 两份文本是否存在差异。
pub fn is_different(result : DiffResult) -> Bool {
  result.stats.added + result.stats.removed + result.stats.changed > 0
}
