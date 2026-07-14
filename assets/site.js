(() => {
  const releaseApi = "https://api.github.com/repos/hillegent/rimworld_auto_translater_wiki/releases/latest";
  const fallbackVersion = "1.0.17";
  const localeNames = { en: "en-US", ru: "ru-RU", zh: "zh-CN", pt: "pt-BR" };
  const guideLinks = { en: "user-guide.html", ru: "ru/user-guide.html", zh: "zh-cn/user-guide.html", pt: "pt-br/user-guide.html" };
  const translations = {
    en: {
      guide: "User guide", support: "Support", eyebrow: "RimWorld 1.6 mod",
      heroCopy: "Automatic translation for active RimWorld mods, with local memory, free web providers, and ready packs from the shared library.",
      download: "Download current ZIP", steam: "Open in Steam Workshop", loadingRelease: "Checking current release...", downloadsLabel: "downloads",
      retention: "The GitHub channel keeps one build only: the current release.", supportKicker: "Project support",
      supportTitle: "Hosting and development", supportCopy: "The mod and public library remain free. These optional links help cover infrastructure and ongoing development.",
      manualKicker: "Non-Steam installation", installTitle: "Three steps, no installer", installCopy: "The archive already contains the correct mod folder. Existing local settings and generated translations are outside this folder and are not overwritten.",
      step1Title: "Download", step1Copy: "Get the current ZIP from the button above.", step2Title: "Extract", step2Copy: "Place the folder in", step3Title: "Enable", step3Copy: "Install Harmony, load it first, then enable Auto Translation Framework.", harmony: "Get Harmony",
      includedKicker: "Included", featuresTitle: "One framework for the full translation loop", feature1Title: "Automatic scan", feature1Copy: "Finds missing Keyed, DefInjected, and supported runtime UI text across active mods.",
      feature2Title: "Shared packs", feature2Copy: "Checks ready micro, compact, and individual mod packs before translating locally.", feature3Title: "Flexible providers", feature3Copy: "Works with free web translators by default and optional API or compatible AI providers.",
      feature4Title: "Safe local cache", feature4Copy: "Preserves placeholders, keeps translation memory, and never edits other Workshop mods.", footerCopy: "Unofficial RimWorld mod. Not endorsed by Ludeon Studios.", infrastructure: "Infrastructure", releasePage: "Release page"
    },
    ru: {
      guide: "Руководство", support: "Поддержать", eyebrow: "Мод для RimWorld 1.6",
      heroCopy: "Автоматический перевод активных модов RimWorld: локальная память, бесплатные веб-переводчики и готовые паки из общей библиотеки.",
      download: "Скачать актуальный ZIP", steam: "Открыть в Steam Workshop", loadingRelease: "Проверяем актуальную сборку...", downloadsLabel: "скачиваний",
      retention: "На GitHub хранится только одна сборка: самая свежая.", supportKicker: "Поддержка проекта",
      supportTitle: "Хостинг и разработка", supportCopy: "Мод и общая библиотека остаются бесплатными. Эти добровольные ссылки помогают оплачивать инфраструктуру и дальнейшую разработку.",
      manualKicker: "Установка без Steam", installTitle: "Три шага, без установщика", installCopy: "В архиве уже лежит готовая папка мода. Локальные настройки и сгенерированные переводы хранятся отдельно и не перезаписываются.",
      step1Title: "Скачать", step1Copy: "Загрузите актуальный ZIP по кнопке выше.", step2Title: "Распаковать", step2Copy: "Поместите папку в", step3Title: "Включить", step3Copy: "Установите Harmony, поставьте его выше, затем включите Auto Translation Framework.", harmony: "Скачать Harmony",
      includedKicker: "В сборке", featuresTitle: "Один мод для полного цикла перевода", feature1Title: "Автоматический скан", feature1Copy: "Находит отсутствующие Keyed, DefInjected и поддерживаемые runtime-строки интерфейса во всех активных модах.",
      feature2Title: "Общие паки", feature2Copy: "Сначала проверяет готовые микро-, компактные и отдельные паки модов, затем переводит недостающее локально.", feature3Title: "Разные переводчики", feature3Copy: "По умолчанию работает с бесплатными веб-переводчиками, при желании подключаются API и совместимые ИИ.",
      feature4Title: "Безопасный локальный кэш", feature4Copy: "Сохраняет плейсхолдеры и память переводов, не изменяя файлы других Workshop-модов.", footerCopy: "Неофициальный мод RimWorld. Не связан с Ludeon Studios.", infrastructure: "Инфраструктура", releasePage: "Страница релиза"
    },
    zh: {
      guide: "用户指南", support: "支持项目", eyebrow: "RimWorld 1.6 模组",
      heroCopy: "为已启用的 RimWorld 模组自动翻译，支持本地记忆、免费网页翻译器和共享库中的现成翻译包。",
      download: "下载最新 ZIP", steam: "在 Steam 创意工坊打开", loadingRelease: "正在检查最新版本...", downloadsLabel: "次下载",
      retention: "GitHub 仅保留一个构建：当前最新版本。", supportKicker: "支持项目", supportTitle: "托管与开发",
      supportCopy: "模组和公共翻译库保持免费。以下自愿支持链接可帮助承担基础设施和持续开发费用。",
      manualKicker: "非 Steam 安装", installTitle: "三步完成，无需安装程序", installCopy: "压缩包中已经包含正确的模组文件夹。本地设置和生成的翻译位于其他位置，不会被覆盖。",
      step1Title: "下载", step1Copy: "使用上方按钮下载最新 ZIP。", step2Title: "解压", step2Copy: "将文件夹放入", step3Title: "启用", step3Copy: "安装 Harmony，将其排在前面，然后启用 Auto Translation Framework。", harmony: "获取 Harmony",
      includedKicker: "包含功能", featuresTitle: "覆盖完整翻译流程的一个框架", feature1Title: "自动扫描", feature1Copy: "扫描所有已启用模组中缺失的 Keyed、DefInjected 和受支持的运行时界面文本。",
      feature2Title: "共享翻译包", feature2Copy: "本地翻译前先检查现成的微型包、分片包和独立模组包。", feature3Title: "灵活的翻译服务", feature3Copy: "默认使用免费网页翻译器，也可选择 API 或兼容的 AI 服务。",
      feature4Title: "安全本地缓存", feature4Copy: "保护占位符、保存翻译记忆，并且不修改其他创意工坊模组。", footerCopy: "非官方 RimWorld 模组，未经 Ludeon Studios 认可。", infrastructure: "基础设施", releasePage: "发布页面"
    },
    pt: {
      guide: "Guia do usuário", support: "Apoiar", eyebrow: "Mod para RimWorld 1.6",
      heroCopy: "Tradução automática para mods ativos do RimWorld, com memória local, tradutores web gratuitos e pacotes prontos da biblioteca compartilhada.",
      download: "Baixar ZIP atual", steam: "Abrir na Oficina Steam", loadingRelease: "Verificando a versão atual...", downloadsLabel: "downloads",
      retention: "O canal do GitHub mantém apenas uma compilação: a versão atual.", supportKicker: "Apoio ao projeto", supportTitle: "Hospedagem e desenvolvimento",
      supportCopy: "O mod e a biblioteca pública continuam gratuitos. Estes links opcionais ajudam a cobrir a infraestrutura e o desenvolvimento contínuo.",
      manualKicker: "Instalação sem Steam", installTitle: "Três etapas, sem instalador", installCopy: "O arquivo já contém a pasta correta do mod. Configurações locais e traduções geradas ficam fora dela e não são sobrescritas.",
      step1Title: "Baixar", step1Copy: "Baixe o ZIP atual pelo botão acima.", step2Title: "Extrair", step2Copy: "Coloque a pasta em", step3Title: "Ativar", step3Copy: "Instale o Harmony, carregue-o primeiro e depois ative o Auto Translation Framework.", harmony: "Obter Harmony",
      includedKicker: "Incluído", featuresTitle: "Um framework para todo o ciclo de tradução", feature1Title: "Varredura automática", feature1Copy: "Encontra textos Keyed, DefInjected e de interface em runtime ausentes nos mods ativos.",
      feature2Title: "Pacotes compartilhados", feature2Copy: "Verifica pacotes micro, compactos e individuais antes de traduzir localmente.", feature3Title: "Provedores flexíveis", feature3Copy: "Usa tradutores web gratuitos por padrão e aceita APIs ou provedores de IA compatíveis.",
      feature4Title: "Cache local seguro", feature4Copy: "Preserva placeholders, mantém a memória e nunca altera outros mods da Oficina.", footerCopy: "Mod não oficial de RimWorld. Não endossado pela Ludeon Studios.", infrastructure: "Infraestrutura", releasePage: "Página da versão"
    }
  };

  let activeLanguage = "en";

  function detectLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (requested && translations[requested.toLowerCase()]) return requested.toLowerCase();
    const stored = localStorage.getItem("atf-page-language");
    if (translations[stored]) return stored;
    const language = (navigator.language || "en").toLowerCase();
    if (language.startsWith("ru")) return "ru";
    if (language.startsWith("zh")) return "zh";
    if (language.startsWith("pt")) return "pt";
    return "en";
  }

  function writeLanguageToUrl(language) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState(null, "", url.toString());
  }

  function applyLanguage(language) {
    if (!translations[language]) language = "en";
    activeLanguage = language;
    localStorage.setItem("atf-page-language", language);
    document.documentElement.lang = localeNames[language];
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = translations[language][element.dataset.i18n];
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-language]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    document.querySelectorAll("[data-guide-link]").forEach((link) => {
      link.href = guideLinks[language];
    });
  }

  function formatBytes(bytes) {
    if (!Number.isFinite(bytes) || bytes <= 0) return "";
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }

  function getDownloadsBeforeRelease(release) {
    const match = String(release.body || "").match(/<!--\s*atf-downloads-before-release:(\d+)\s*-->/i);
    return match ? Number(match[1]) : 0;
  }

  async function loadRelease() {
    const sizeElement = document.querySelector("[data-release-size]");
    const dateElement = document.querySelector("[data-release-date]");
    const versionElement = document.querySelector("[data-release-version]");
    const downloadsElement = document.querySelector("[data-release-downloads]");
    const downloadCountElement = document.querySelector("[data-release-download-count]");
    try {
      const response = await fetch(releaseApi, { headers: { Accept: "application/vnd.github+json" } });
      if (!response.ok) throw new Error(`release ${response.status}`);
      const release = await response.json();
      const asset = (release.assets || []).find((item) => item.name === "Auto-Translation-Framework.zip");
      versionElement.textContent = String(release.tag_name || fallbackVersion).replace(/^v/i, "");
      sizeElement.removeAttribute("data-i18n");
      sizeElement.textContent = asset ? formatBytes(Number(asset.size)) : "ZIP";
      dateElement.textContent = release.published_at
        ? new Intl.DateTimeFormat(localeNames[activeLanguage], { dateStyle: "medium" }).format(new Date(release.published_at))
        : "";
      const currentDownloads = asset ? Number(asset.download_count) : NaN;
      const totalDownloads = getDownloadsBeforeRelease(release) + currentDownloads;
      if (Number.isFinite(totalDownloads) && totalDownloads >= 0) {
        downloadCountElement.textContent = new Intl.NumberFormat(localeNames[activeLanguage]).format(totalDownloads);
        downloadsElement.hidden = false;
      } else {
        downloadsElement.hidden = true;
      }
    } catch (error) {
      versionElement.textContent = fallbackVersion;
      sizeElement.removeAttribute("data-i18n");
      sizeElement.textContent = "ZIP";
      dateElement.textContent = "";
      downloadsElement.hidden = true;
    }
  }

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.language);
      writeLanguageToUrl(button.dataset.language);
      loadRelease();
    });
  });
  applyLanguage(detectLanguage());
  loadRelease();
  if (window.lucide) window.lucide.createIcons();
})();
