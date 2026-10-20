# MoonBit 十月黑客松 项目申报书

## 一、项目名称与仓库

- **项目名称**：mbt-diffview（基于 MoonBit 的文本 Diff 查看器）
- **GitHub 仓库**：https://github.com/Mr-Houjie/mbt-diffview
- **许可证**：MIT ｜ **MoonBit**：≥ 0.10.14

## 二、项目简介

mbt-diffview 用 MoonBit 原生实现文本 Diff 查看：行级差异基于官方 `core/diff`，变更行再做字符级高亮，支持 Myers / Patience 两种算法与标准 unified patch 导出。它同时提供库、CLI 和 Web GUI。

核心分为五层：类型模型 → 文本切行 → 词级片段 → 行级引擎（把编辑脚本转成左右对照行）→ 输出层（text / json / html / CLI / GUI）。

## 三、项目方向与通用性

**方向**：开发者工具。

**通用性**：行级 diff、词级高亮和渲染都是纯函数，不依赖文件系统或网络；库、CLI、GUI 共用同一套核心 API。调用方可以在代码评审、配置审查、测试报告或 CI 中复用；新增输出格式只需增加渲染器，不改变 diff 核心。

**生态排查**：在 mooncakes.io 官方索引（3,133 个模块）检索 `diff viewer`、`side-by-side diff`、`diff GUI`，均 0 命中。

## 四、预期使用场景

1. **代码评审**：开发者对比两个版本的源文件，左右并排查看新增、删除和修改行，再用词级高亮定位一行内的具体改动，减少逐行肉眼比对。
2. **配置审查**：运维人员对比 staging 与 production 的配置文件，导出 JSON 报告，重点检查端口、开关和密钥是否被误改。
3. **CI 差异报告**：测试快照发生变化时，CI 调用 CLI 生成独立 HTML 页面并作为构建产物归档，评审者无需本地安装工具即可查看差异。

## 五、拟实现的核心功能

1. **行级 diff**：基于官方 `moonbitlang/core/diff`，支持 Myers（默认）与 Patience。
2. **词级高亮**：变更行做字符级 diff，中文、英文、标点统一按字符处理。
3. **左右对照**：旧 / 新文本并排显示，带行号与 `+ / - / ~ / =` 统计。
4. **三种输出**：`text`、`json`、独立 `html` 页面。
5. **统一补丁**：导出标准 `@@ -a,b +c,d @@` 文本，可直接交给 `patch`。
6. **CLI**：`--format`、`--algorithm`、`--context`、`--no-word-level`、`--output`，退出码区分相同 / 不同 / 错误。
7. **Web GUI**：Rabbita 实现，双输入框、实时对照、词级开关、示例载入，静态页面直接打开。
8. **可自检语料**：22 条「输入 → 期望统计」用例 + 8 份真实语料黄金测试，`moon test`、`cmd/verify`、`cmd/golden` 共用。

## 六、项目性质

**原创项目（非移植）**。代码由作者独立编写；行级 diff 复用官方 `core/diff` 的公开 API，左右对照模型、词级片段、渲染与 GUI 均为原创工程工作。

**移植说明**：不适用，没有参考项目或许可证依赖。

**原创工程工作**：用代数数据类型统一「行角色 + 双向行号 + 词级片段」；把 Delete + Insert 编辑脚本配对成左右对照的 Change 行；字符级片段保证可还原原行；切行、索引与渲染都做边界处理，固定种子 fuzz 300 轮断言不 panic。

## 七、GitHub 与提交记录

仓库：https://github.com/Mr-Houjie/mbt-diffview

`main` 分支包含 11 个有效提交，按「脚手架 → 类型 → 切行 → 词级 → 行级引擎 → 输出 → CLI → 语料 → 真实 fixture → GUI → 文档」分层，无空提交、无重复提交。
