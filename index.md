---
title: Auto Translation Framework
description: Automatic translation for modded RimWorld
---

# Auto Translation Framework

**English** | [Русский](ru/) | [简体中文](zh-cn/)

![Auto Translation Framework preview](assets/preview.png)

[![RimWorld 1.6](https://img.shields.io/badge/RimWorld-1.6-8c5a3c)](https://rimworldgame.com/)
![Version 1.0.11](https://img.shields.io/badge/version-1.0.11-2f81f7)
[![Steam Workshop](https://img.shields.io/badge/Steam-Workshop-1b2838?logo=steam)](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650)

Auto Translation Framework is a RimWorld mod that translates other active mods without editing their Workshop files. It scans missing localization, reuses local and shared translations, sends remaining text to configured translation providers, and applies completed translations during play where RimWorld allows it safely.

**[Install from Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650)** | **[Open the user guide](user-guide.html)**

## What it translates

- **Keyed strings** used by interfaces, alerts, messages, and mod systems.
- **DefInjected fields** such as labels, descriptions, thoughts, traits, items, buildings, events, research, and supported custom Def fields.
- **Selected hardcoded C# UI text** captured at runtime from windows, buttons, float menus, gizmos, tooltips, inspect strings, letters, and messages.
- **Existing translation data** imported from compatible translation mods and supported external auto-translation caches.

The framework keeps a persistent translation memory and builds a generated XML cache for later starts. Existing human translations are preserved by default.

## Main features

- Automatic startup scan and background translation queue.
- Target language detection from the active RimWorld interface language.
- Free web providers that do not require an API key for the default setup.
- Optional OpenAI, Claude, OpenRouter, DeepSeek, Gemini, DeepL, Microsoft, Google Cloud, LibreTranslate, and OpenAI-compatible providers.
- Multi-provider mode with configurable parallelism and provider profiles.
- Per-mod enable, disable, progress, retry, apply, and reset controls.
- Full-screen translation editor for searching, correcting, and retrying individual entries.
- Optional shared translation library with verified base packs, author packs, ratings, and human corrections.
- Placeholder and rich-text validation before provider output is accepted.
- Local diagnostics, provider health checks, retry cooldowns, and a network circuit breaker.

## Quick start

1. Install [Harmony](https://steamcommunity.com/sharedfiles/filedetails/?id=2009463077) and Auto Translation Framework from the [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650).
2. Enable Harmony before Auto Translation Framework in the RimWorld mod list.
3. Select the language you want to use in RimWorld.
4. Open **Options > Mod settings > Auto Translation Framework**.
5. On **Overview**, leave **Use RimWorld interface language** enabled.
6. On **Translators**, keep **Google Translate Web** for the simplest no-key setup, or configure another provider.
7. Let the startup scan finish. The **Mods** tab shows progress and remaining strings for each active mod.

The normal workflow is automatic. Detailed settings and troubleshooting are covered in the **[user guide](user-guide.html)**.

## How the pipeline works

1. Active mods are scanned for supported translatable strings.
2. Existing human translations and local translation memory are checked first.
3. If enabled, the shared library is checked for reusable verified translations.
4. Missing entries are queued for the selected translation provider or provider pool.
5. Results are validated to protect placeholders, formatting, and rich-text tags.
6. Ready translations are stored locally, applied at runtime where safe, and written to a generated XML cache for future starts.

Original Workshop mod files are not modified.

## Shared translation library

The optional shared library reduces repeated translation work across players. It can provide verified base translations and author-published packs, accept human corrections, and reuse completed translations for matching mods and languages.

Downloads and uploads are separate settings. Translation work can remain fully local, use downloads only, or explicitly enable sharing features. Submitted material may pass through automated review before it becomes a trusted shared pack.

Operational and funding information is available on the **[infrastructure page](infrastructure-and-funding.html)**.

## Safety and limitations

- Translation quality depends on the provider, source text, and review status of library data.
- Hardcoded runtime text is best-effort because mods can draw UI through custom code paths.
- Some newly translated Def data may require a RimWorld restart before every screen reflects it.
- The `Strings` scope is not enabled yet because those files require format-specific handling.
- API and network features can be disabled; provider credentials are only needed for providers that require them.

The project is experimental and actively evolving. It cannot guarantee complete coverage for every mod or every dynamically generated string.

## Project links

- [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650)
- [User guide](user-guide.html)
- [Infrastructure and funding](infrastructure-and-funding.html)

## Legal notice

Portions of the materials used to create this content/mod are trademarks and/or copyrighted works of Ludeon Studios Inc. All rights reserved by Ludeon. This content/mod is not official and is not endorsed by Ludeon.
