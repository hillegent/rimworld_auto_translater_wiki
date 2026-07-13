---
title: Auto Translation Framework
description: 为 RimWorld 模组提供自动翻译
---

# Auto Translation Framework

[English](../index.html) | [Русский](../ru/index.html) | **简体中文** | [Português (Brasil)](../pt-br/index.html)

![Auto Translation Framework 预览](../assets/preview.png)

[![RimWorld 1.6](https://img.shields.io/badge/RimWorld-1.6-8c5a3c)](https://rimworldgame.com/)
![版本 1.0.17](https://img.shields.io/badge/version-1.0.17-2f81f7)
[![Steam Workshop](https://img.shields.io/badge/Steam-Workshop-1b2838?logo=steam)](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650)

Auto Translation Framework 是一款 RimWorld 模组，可以在不修改其他模组创意工坊文件的情况下翻译当前启用的模组。它会扫描缺失的本地化内容，优先复用本地和共享翻译，将剩余文本发送给已配置的翻译服务，并在 RimWorld 允许的范围内于游戏运行时安全应用翻译结果。

**[下载最新 ZIP](https://github.com/hillegent/rimworld_auto_translater_wiki/releases/latest/download/Auto-Translation-Framework.zip)** | **[从 Steam 创意工坊安装](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650)** | **[打开用户指南](user-guide.html)**

## 可以翻译的内容

- **Keyed 键值文本**：界面、警报、消息和模组系统所使用的本地化字符串。
- **DefInjected 字段**：名称、描述、心情、特性、物品、建筑、事件、研究以及受支持的自定义 Def 字段。
- **部分硬编码的 C# 界面文本**：运行时捕获窗口、按钮、浮动菜单、命令、工具提示、检查信息、信件和消息中的文本。
- **已有翻译数据**：从兼容的翻译模组和受支持的其他自动翻译缓存中导入。

框架会保存持久化翻译记忆，并为后续启动生成 XML 缓存。默认情况下，已有的人工翻译会被保留并具有更高优先级。

## 主要功能

- 启动时自动扫描，并在后台处理翻译队列。
- 根据当前 RimWorld 界面语言自动确定目标语言。
- 默认提供无需 API 密钥的免费网页翻译服务。
- 可选支持 OpenAI、Claude、OpenRouter、DeepSeek、Gemini、DeepL、Microsoft、Google Cloud、LibreTranslate 以及 OpenAI 兼容服务。
- 多翻译服务模式，可配置并行数量和不同服务配置文件。
- 可针对每个模组单独启用、禁用、查看进度、重试、应用或重置翻译。
- 全屏翻译编辑器，可搜索、修正和重新翻译单个条目。
- 可选共享翻译库，提供已验证的基础翻译、作者翻译包、评分和人工修正。
- 在接受翻译结果前检查占位符、格式和富文本标签。
- 本地诊断、翻译服务健康检查、重试冷却和网络熔断保护。

## 快速开始

1. 从 Steam 创意工坊安装 [Harmony](https://steamcommunity.com/sharedfiles/filedetails/?id=2009463077) 和 [Auto Translation Framework](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650)。
2. 在 RimWorld 模组列表中确保 Harmony 排在 Auto Translation Framework 前面。
3. 在 RimWorld 中选择你希望使用的界面语言。
4. 打开 **选项 > 模组设置 > Auto Translation Framework**。
5. 在 **Overview（概览）** 页面保留 **Use RimWorld interface language（使用 RimWorld 界面语言）**。
6. 在 **Translators（翻译服务）** 页面保留 **Google Translate Web**，即可使用最简单的免密钥配置；也可以设置其他服务。
7. 等待启动扫描完成。**Mods（模组）** 页面会显示每个已启用模组的翻译进度和剩余文本数量。

常规流程会自动完成。所有设置和常见问题请参阅完整的 **[用户指南](user-guide.html)**。

## 翻译流程

1. 扫描所有已启用模组中受支持的可翻译文本。
2. 优先检查已有人工翻译和本地翻译记忆。
3. 如果启用了共享库，则查找可复用的已验证翻译。
4. 将缺失条目加入所选翻译服务或服务池的队列。
5. 检查结果中的占位符、格式和富文本标签。
6. 将有效翻译保存到本地，在安全的位置于运行时应用，并写入 XML 缓存供下次启动使用。

不会修改原始 Steam 创意工坊模组文件。

## 共享翻译库

可选的共享翻译库能够减少玩家之间重复进行相同翻译的工作。它可以提供已验证的基础翻译和作者翻译包，接收人工修正，并为相同模组和语言复用已有结果。

下载和上传功能分别设置。你可以让所有翻译完全保留在本地、只启用下载，或者明确启用共享功能。提交的内容可能需要经过自动审核，之后才会成为可信的共享翻译包。

服务运行和资金信息请参阅 **[基础设施与资金页面](infrastructure-and-funding.html)**。

## 安全性与限制

- 翻译质量取决于翻译服务、原始文本以及共享翻译的审核状态。
- 硬编码运行时文本采用尽力而为的方式，因为某些模组会使用完全自定义的界面绘制方式。
- 某些新生成的 DefInjected 翻译需要重启 RimWorld，才能在所有界面中完整显示。
- `Strings` 范围目前尚未启用，因为这些文件需要针对格式进行专门的安全处理。
- 可以关闭 API 和网络功能；只有需要密钥的服务才必须提供凭据。

本项目仍处于实验阶段并在持续开发中，无法保证从第一天起完整覆盖每个模组或每一条动态生成的文本。

## 项目链接

- [Steam 创意工坊](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650)
- [用户指南](user-guide.html)
- [基础设施与资金](infrastructure-and-funding.html)

## 法律声明

Portions of the materials used to create this content/mod are trademarks and/or copyrighted works of Ludeon Studios Inc. All rights reserved by Ludeon. This content/mod is not official and is not endorsed by Ludeon.
