---
title: 用户指南
description: Auto Translation Framework 设置、功能与故障排除
---

# Auto Translation Framework 用户指南

[English](../user-guide.html) | [Русский](../ru/user-guide.html) | **简体中文** | [Português (Brasil)](../pt-br/user-guide.html)

本指南介绍 RimWorld 1.6 中 Auto Translation Framework 1.0.17 的玩家使用流程。

## 系统要求

- RimWorld 1.6。
- [Harmony](https://steamcommunity.com/sharedfiles/filedetails/?id=2009463077)，并在 Auto Translation Framework 之前加载。
- 使用网页/API 翻译服务和可选共享库时需要互联网连接。
- 只有所选翻译服务要求时才需要 API 密钥。

## 安装

推荐通过 [Steam 创意工坊](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650)安装。若不使用 Steam，可下载 [GitHub 最新 ZIP](https://github.com/hillegent/rimworld_auto_translater_wiki/releases/latest/download/Auto-Translation-Framework.zip)，并将其中的 `RimWorldAutoTranslator` 文件夹解压到 `RimWorld\Mods`。

1. 订阅 Harmony 和 Auto Translation Framework。
2. 打开 RimWorld 的 **Mods（模组）** 菜单。
3. 启用 Harmony，并确保它位于 Auto Translation Framework 之前。
4. 更改启用的模组列表后重启 RimWorld。

默认情况下，已有的人工翻译会被保留，并优先于自动生成的翻译。

## 首次运行设置

1. 在 RimWorld 中选择你希望使用的语言。
2. 打开 **选项 > 模组设置 > Auto Translation Framework**。
3. 在 **Overview（概览）** 中启用翻译器，并保留 **Use RimWorld interface language（使用 RimWorld 界面语言）**。
4. 在 **Translators（翻译服务）** 中选择 **Google Translate Web**，即可使用默认的免密钥配置。
5. 关闭设置窗口，让启动流程扫描当前启用的模组列表。
6. 返回 **Mods（模组）** 页面，查看每个模组的覆盖率、待处理条目和已完成翻译。

默认翻译服务不需要 API 密钥。付费 API、本地模型和共享翻译库都是可选功能。

## 设置页面

| 页面 | 用途 |
| --- | --- |
| **Overview（概览）** | 总开关、目标语言和简洁的流程状态面板。 |
| **Translators（翻译服务）** | 服务选择、凭据、健康检查、配置文件、批处理和多服务模式。 |
| **Mods（模组）** | 每个模组的翻译范围、扫描结果、进度、重试、应用、重置和搜索。 |
| **Editor（编辑器）** | 打开全屏翻译工作台，进行人工修正。 |
| **Library（共享库）** | 基础翻译、作者翻译包、目录操作、下载、评分和可选上传。 |
| **Advanced（高级）** | 翻译范围、性能、后台队列、验证、网络和存储设置。 |
| **Debug（调试）** | 流程状态、诊断日志、修复操作和设置重置。 |

## 翻译范围

### Keyed 键值文本

Keyed 文本是 RimWorld 菜单、消息、警报以及许多模组系统使用的普通本地化键。该范围默认启用。

### DefInjected

DefInjected 翻译覆盖 RimWorld Def 中受支持的字段，例如名称、描述、特性、心情、物品、建筑、研究、事件、健康状态以及类似数据。该范围默认启用。

### 硬编码 C# 界面文本

有些模组会直接通过 C# 绘制英文文本，而不使用 RimWorld 语言文件。运行时层会观察受支持的界面路径，并在绘制已知文本时进行翻译。它可处理部分标签、按钮、浮动菜单选项、命令、工具提示、检查信息、信件和消息。

运行时覆盖采用尽力而为的方式。如果它在超大型模组列表中影响性能，可以只关闭 **Translate hardcoded C# UI strings（翻译硬编码 C# 界面文本）**；Keyed 和 DefInjected 翻译仍可继续工作。

### Strings 文件

通用 `Strings` 翻译目前处于禁用状态。这些文件可能包含对格式敏感的规则，需要专门的安全处理。

## 翻译服务

### 无需密钥的服务

内置网页服务包括 Google Translate Web、Yandex Web、Bing Translator Web 和 MyMemory Web。Google Translate Web 是默认的单服务配置。

公共网页接口可能会限制请求频率、改变行为或暂时不可用。服务健康检查、重试冷却和网络熔断器可以避免无休止的失败重试。

### API 和本地服务

翻译服务菜单还支持：

- ChatGPT / OpenAI；
- Claude；
- 本地或远程 OpenAI 兼容服务器；
- OpenRouter；
- DeepSeek；
- Gemini；
- Google Cloud Translation；
- Microsoft Translator；
- DeepL 和 DeepL Pro；
- LibreTranslate；
- Apertium 和兼容的翻译代理。

使用 API 服务时，请选择对应服务，并填写界面中显示的端点、模型、API 密钥和其他专用字段。在开始大型批处理前，先使用 **Check providers now（立即检查服务）**。

服务凭据会保存在 RimWorld 的模组设置中。不要发布或共享包含私密密钥的设置文件。

### 多服务模式

多服务模式会将待处理条目分配给多个已配置的翻译服务，并可并行发送请求。每个服务槽都有独立的并发数量。建议从保守设置开始；过高并发可能触发限流，却不会提高翻译质量。

服务配置文件允许为同一服务保存多套设置，例如本地模型和托管的 OpenAI 兼容端点。

## 每个模组的控制

**Mods（模组）** 页面列出当前启用的模组，并显示已扫描、待处理和已翻译数量。

- 对已有高质量语言包或不需要自动翻译的模组关闭翻译。
- 使用 **Apply（应用）** 让运行时应用已经准备好的条目。
- 使用 **Finish translation（完成翻译）** 将缺失或失败条目重新加入流程。
- 当某个模组的生成状态需要重建时使用 **Reset（重置）**。
- 更改翻译范围或启用的模组列表后，使用 **Rescan active mods now（立即重新扫描已启用模组）**。

已禁用的模组仍会出现在扫描统计中，但其新条目不会加入翻译队列。

## 翻译编辑器

打开 **Editor > Open translation editor（编辑器 > 打开翻译编辑器）** 进入全屏工作台。

编辑器可以：

- 按模组整理翻译记忆；
- 搜索原文、键和译文；
- 手动编辑译文；
- 将条目重新交给自动翻译；
- 恢复或复制原文；
- 将人工修正保存到本地翻译记忆；
- 在配置共享库后，将选定模组提交为作者翻译。

人工编辑会唤醒运行时和生成包调度器。部分修改会立即显示；对格式敏感的 Def 内容可能要在下次启动 RimWorld 后才会完整显示。

## 共享翻译库

共享库是可选功能，在启用相关设置前不会运行。

可用流程包括：

- 下载可复用的已验证基础翻译；
- 浏览和下载作者翻译包；
- 为作者翻译包评分；
- 为一个选定模组提交完整的作者翻译；
- 在启用相应共享选项后提交人工修正。

下载和上传功能分别控制。启用下载不要求同时启用上传。上传可能需要服务授权，提交的翻译包也可能需要审核后才能成为可信共享翻译。

当共享库中已有匹配翻译时，可以直接复用，不必再次调用翻译服务，从而减少重复请求。

## 本地文件与安全

Auto Translation Framework 不会修改其他 Steam 创意工坊模组的原始文件。

其本地存储目录包含：

- `TranslationMemoryV2.jsonl` — 持久化翻译记忆；
- `GeneratedPacks` — 生成的本地化数据；
- `LibraryModStateV1.jsonl` — 本地共享库状态；
- `HumanCorrectionsV1.jsonl` — 等待提交的人工修正；
- `PipelineDiagnostics.log` — 诊断事件。

使用 **Advanced/Debug > Open local files folder（高级/调试 > 打开本地文件夹）** 打开当前平台对应的正确位置。

生成的 XML 属于框架缓存。需要长期保留的修正应通过翻译编辑器完成，而不是直接编辑生成文件。

## 故障排除

### 没有任何内容被翻译

1. 确认 **Overview（概览）** 中的总开关已启用。
2. 检查 **Overview（概览）** 中解析出的目标语言。
3. 确认受影响的模组已在 **Mods（模组）** 中启用。
4. 确认 **Advanced（高级）** 中已启用 Keyed、DefInjected 或硬编码界面范围。
5. 检查 **Translators（翻译服务）** 中的服务状态。
6. 运行 **Rescan active mods now（立即重新扫描）** 或 **Restart translation workflow（重新启动翻译流程）**。

### 翻译服务不断失败

- 运行 **Check providers now（立即检查服务）**。
- 检查端点、模型、API 密钥、区域和服务专用字段。
- 如果服务报告限流或超时，请降低并发数量和批处理大小。
- 等待界面显示的重试冷却时间，不要反复重新启动请求。
- 尝试其他服务，以确认是否为单个服务故障。

### 仍有部分英文文本

- 确认已启用硬编码 C# 界面翻译。
- 至少打开一次相关模组窗口，使运行时能够观察文本并将其加入队列。
- 检查文本是否为动态内容、图片文字或由不受支持的自定义界面路径生成。
- 大规模 DefInjected 翻译完成后重启 RimWorld，让生成的 XML 缓存从启动阶段加载。

### 大型模组列表出现性能下降

- 首先禁用硬编码 C# 界面翻译，并比较性能差异。
- 减少扫描线程和翻译服务并发数量。
- 正常游玩时保持调试日志关闭。

### 需要更多诊断信息

打开 **Debug（调试）**，检查流程快照，并使用 **Open pipeline diagnostics log（打开流程诊断日志）**。在 [Steam 创意工坊页面](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650)报告问题时，请附上相关状态和简短复现步骤，但不要包含 API 密钥或私密令牌。

## 当前限制

- 运行时 C# 覆盖无法拦截所有自定义绘制方式或动态生成文本路径。
- 即使格式验证通过，翻译服务仍可能生成错误术语。
- 通用 `Strings` 文件目前尚未翻译。
- 部分已完成翻译需要重启后才能在所有位置显示。
- 翻译服务和共享库的可用性依赖外部网络服务。

[返回项目概览](index.html)
