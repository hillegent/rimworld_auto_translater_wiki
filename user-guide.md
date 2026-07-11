---
title: User guide
description: Auto Translation Framework setup, features, and troubleshooting
---

# Auto Translation Framework user guide

This guide describes the player-facing workflow for Auto Translation Framework 1.0.11 on RimWorld 1.6.

## Requirements

- RimWorld 1.6.
- [Harmony](https://steamcommunity.com/sharedfiles/filedetails/?id=2009463077), loaded before Auto Translation Framework.
- Internet access for web/API translation providers and the optional shared library.
- An API key only when the selected provider requires one.

## Installation

The recommended installation is through the [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650).

1. Subscribe to Harmony and Auto Translation Framework.
2. Open RimWorld's **Mods** menu.
3. Enable Harmony before Auto Translation Framework.
4. Restart RimWorld after changing the active mod list.

Existing human translations are preserved by default and take priority over generated output.

## First-run setup

1. Select your preferred language in RimWorld.
2. Open **Options > Mod settings > Auto Translation Framework**.
3. On **Overview**, enable the translator and keep **Use RimWorld interface language** selected.
4. On **Translators**, use **Google Translate Web** for the default no-key configuration.
5. Close the settings window and allow the startup workflow to scan the active mod list.
6. Return to **Mods** to see per-mod coverage, pending work, and completed translations.

The default provider works without an API key. Paid APIs, local models, and the shared library are optional.

## Settings tabs

| Tab | Purpose |
| --- | --- |
| **Overview** | Master switch, target language, and a compact pipeline dashboard. |
| **Translators** | Provider selection, credentials, health checks, profiles, batches, and multi-provider mode. |
| **Mods** | Per-mod scope, scan results, translation progress, retry/apply/reset actions, and mod search. |
| **Editor** | Opens the full-screen translation workbench for manual corrections. |
| **Library** | Shared base translations, author packs, catalog actions, downloads, ratings, and optional uploads. |
| **Advanced** | Translation scopes, performance, background queue, validation, network, and storage controls. |
| **Debug** | Pipeline status, diagnostic logs, repair actions, and settings reset. |

## Translation scopes

### Keyed

Keyed strings are normal RimWorld localization keys used by menus, messages, alerts, and many mod systems. This scope is enabled by default.

### DefInjected

DefInjected translation covers supported fields on RimWorld Defs: labels, descriptions, traits, thoughts, items, buildings, research, events, hediffs, and similar data. This scope is enabled by default.

### Hardcoded C# UI

Some mods draw English text directly from C# instead of using RimWorld language files. The runtime layer observes supported UI paths and translates known text when it is drawn. It covers selected labels, buttons, float-menu options, commands, tooltips, inspect strings, letters, and messages.

Runtime coverage is best-effort. If it affects performance in a very large mod list, disable only **Translate hardcoded C# UI strings**; Keyed and DefInjected translation can remain active.

### Strings files

Generic `Strings` translation is currently disabled. These files can contain format-sensitive rules and require dedicated safe handling.

## Translation providers

### No-key providers

The built-in web options include Google Translate Web, Yandex Web, Bing Translator Web, and MyMemory Web. Google Translate Web is the default single-provider setup.

Public web endpoints can rate-limit, change behavior, or become temporarily unavailable. Provider health checks, retry cooldowns, and the network circuit breaker prevent endless retry loops.

### API and local providers

The provider menu also supports:

- ChatGPT / OpenAI;
- Claude;
- OpenAI-compatible local or remote servers;
- OpenRouter;
- DeepSeek;
- Gemini;
- Google Cloud Translation;
- Microsoft Translator;
- DeepL and DeepL Pro;
- LibreTranslate;
- Apertium and compatible translation proxies.

For an API provider, select it and fill in the endpoint, model, API key, and any provider-specific fields shown in the UI. Use **Check providers now** before starting a large batch.

Provider credentials are saved with RimWorld's mod settings. Do not publish or share a settings file that contains private keys.

### Multi-provider mode

Multi-provider mode splits pending entries between several configured providers and can run requests in parallel. Each provider slot has its own concurrency value. Start with conservative limits; increasing concurrency can trigger provider throttling without improving translation quality.

Provider profiles allow several configurations for the same provider, such as a local model and a hosted OpenAI-compatible endpoint.

## Per-mod controls

The **Mods** tab lists the active mod set and shows scanned, pending, and translated counts.

- Disable translation for a mod that already has a preferred language pack or does not need automatic translation.
- Use **Apply** to wake runtime application for ready entries.
- Use **Finish translation** to restore missing or failed entries to the workflow.
- Use **Reset** when a mod's generated state must be rebuilt.
- Use **Rescan active mods now** after changing translation scope or the active mod list.

Disabled mods remain visible in scan statistics, but new entries from them are not added to the translation queue.

## Translation editor

Open **Editor > Open translation editor** to launch the full-screen workbench.

The editor can:

- group translation memory by mod;
- search originals, keys, and translations;
- edit translated text manually;
- return an entry to automatic translation;
- restore or copy the original text;
- save human corrections to local memory;
- submit a selected mod as an author translation when library sharing is configured.

Manual edits wake the runtime and generated-pack schedulers. Some changes appear during play; format-sensitive Def content may become fully visible after the next RimWorld start.

## Shared translation library

The library is optional and disabled until its controls are enabled.

Available workflows include:

- downloading reusable verified base translations;
- browsing and downloading author translation packs;
- rating an author pack;
- submitting a complete author translation for one selected mod;
- submitting human corrections when that sharing option is enabled.

Downloads and uploads are controlled separately. Enabling downloads does not require enabling uploads. Upload operations may require service authorization, and submitted packs may be reviewed before becoming trusted shared translations.

The library reduces repeated provider calls: when a matching translation already exists, it can be reused instead of translating the same text again.

## Local files and safety

Auto Translation Framework does not edit the original files of other Workshop mods.

Its local storage folder contains:

- `TranslationMemoryV2.jsonl` — persistent translation memory;
- `GeneratedPacks` — generated localization data;
- `LibraryModStateV1.jsonl` — local shared-library state;
- `HumanCorrectionsV1.jsonl` — queued manual corrections;
- `PipelineDiagnostics.log` — diagnostic events.

Use **Advanced/Debug > Open local files folder** to open the correct platform-specific location.

Generated XML belongs to the framework's cache. Make durable corrections in the translation editor rather than editing generated files directly.

## Troubleshooting

### Nothing is being translated

1. Confirm that the master switch on **Overview** is enabled.
2. Check the resolved target language on **Overview**.
3. Confirm that the affected mod is enabled on **Mods**.
4. Confirm that Keyed, DefInjected, or hardcoded UI scope is enabled on **Advanced**.
5. Check provider status on **Translators**.
6. Run **Rescan active mods now** or **Restart translation workflow**.

### The provider keeps failing

- Run **Check providers now**.
- Verify endpoint, model, API key, region, and provider-specific fields.
- Reduce concurrency and batch size if the service reports rate limits or timeouts.
- Wait for the displayed retry cooldown instead of repeatedly restarting requests.
- Try a different provider to isolate a provider-specific outage.

### Some English text remains

- Confirm that hardcoded C# UI translation is enabled.
- Open the relevant mod window once so runtime text can be observed and queued.
- Check whether the text is dynamic, graphical, or produced by an unsupported custom UI path.
- Restart RimWorld after a large DefInjected batch so the generated XML cache loads from the beginning.

### Performance drops in a large mod list

- Disable hardcoded C# UI translation first and compare performance.
- Reduce scanner workers and provider concurrency.
- Keep debug logging disabled during normal play.

### More diagnostic information is needed

Open **Debug**, inspect the pipeline snapshot, and use **Open pipeline diagnostics log**. Include the relevant status and a short reproduction description when reporting the problem on the [Steam Workshop page](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650). Do not include API keys or private tokens.

## Current limitations

- Runtime C# coverage cannot intercept every custom drawing or dynamically generated text path.
- Translation providers can produce incorrect terminology even when formatting validation passes.
- Generic `Strings` files are not translated yet.
- Some completed translations require a restart to appear everywhere.
- Provider and library availability depend on external network services.

[Return to the project overview](index.html)
