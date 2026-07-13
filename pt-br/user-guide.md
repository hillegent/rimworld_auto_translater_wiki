---
title: Guia do usuário
description: Configuração, recursos e solução de problemas do Auto Translation Framework
---

# Guia do usuário do Auto Translation Framework

[English](../user-guide.html) | [Русский](../ru/user-guide.html) | [简体中文](../zh-cn/user-guide.html) | **Português (Brasil)**

Este guia descreve o fluxo de uso do Auto Translation Framework 1.0.17 no RimWorld 1.6.

## Requisitos

- RimWorld 1.6.
- [Harmony](https://steamcommunity.com/sharedfiles/filedetails/?id=2009463077), carregado antes do Auto Translation Framework.
- Acesso à internet para provedores de tradução web/API e para a biblioteca compartilhada opcional.
- Uma chave de API somente quando o provedor escolhido exigir.

## Instalação

A instalação recomendada é pela [Oficina Steam](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650). Para instalar sem o Steam, baixe o [ZIP atual no GitHub](https://github.com/hillegent/rimworld_auto_translater_wiki/releases/latest/download/Auto-Translation-Framework.zip) e extraia a pasta `RimWorldAutoTranslator` em `RimWorld\Mods`.

1. Inscreva-se no Harmony e no Auto Translation Framework.
2. Abra o menu **Mods** do RimWorld.
3. Ative o Harmony antes do Auto Translation Framework.
4. Reinicie o RimWorld após alterar a lista de mods ativos.

Traduções humanas existentes são preservadas por padrão e têm prioridade sobre o conteúdo gerado.

## Configuração inicial

1. Escolha o idioma desejado no RimWorld.
2. Abra **Opções > Configurações de mods > Auto Translation Framework**.
3. Em **Overview (Visão geral)**, ative o tradutor e mantenha **Use RimWorld interface language (Usar o idioma da interface do RimWorld)** selecionado.
4. Em **Translators (Tradutores)**, use **Google Translate Web** para a configuração padrão sem chave.
5. Feche a janela de configurações e permita que o fluxo inicial escaneie a lista de mods ativos.
6. Volte para **Mods** para ver a cobertura, o trabalho pendente e as traduções concluídas de cada mod.

O provedor padrão funciona sem chave de API. APIs pagas, modelos locais e a biblioteca compartilhada são opcionais.

## Abas de configuração

| Aba | Finalidade |
| --- | --- |
| **Overview (Visão geral)** | Interruptor principal, idioma de destino e painel resumido do processo. |
| **Translators (Tradutores)** | Seleção de provedores, credenciais, verificações de saúde, perfis, lotes e modo com vários provedores. |
| **Mods** | Escopo por mod, resultados do escaneamento, progresso, repetição, aplicação, redefinição e pesquisa. |
| **Editor** | Abre a área de trabalho em tela cheia para correções manuais. |
| **Library (Biblioteca)** | Traduções-base compartilhadas, pacotes de autores, catálogo, downloads, avaliações e uploads opcionais. |
| **Advanced (Avançado)** | Escopos de tradução, desempenho, fila em segundo plano, validação, rede e armazenamento. |
| **Debug (Depuração)** | Estado do processo, logs de diagnóstico, ações de reparo e redefinição das configurações. |

## Escopos de tradução

### Keyed

Strings Keyed são chaves normais de localização do RimWorld usadas por menus, mensagens, alertas e muitos sistemas de mods. Esse escopo é ativado por padrão.

### DefInjected

A tradução DefInjected cobre campos compatíveis nos Defs do RimWorld: nomes, descrições, traits, pensamentos, itens, construções, pesquisas, eventos, hediffs e dados semelhantes. Esse escopo é ativado por padrão.

### Interface C# codificada diretamente

Alguns mods desenham textos em inglês diretamente pelo C#, em vez de usar arquivos de idioma do RimWorld. A camada de execução observa caminhos de interface compatíveis e traduz textos conhecidos quando eles são desenhados. Ela cobre parte dos rótulos, botões, opções de menus flutuantes, comandos, dicas, textos de inspeção, cartas e mensagens.

A cobertura em tempo de execução é best effort. Se ela afetar o desempenho de uma lista muito grande de mods, desative apenas **Translate hardcoded C# UI strings (Traduzir textos de interface C# codificados diretamente)**; as traduções Keyed e DefInjected podem continuar ativas.

### Arquivos Strings

A tradução genérica de arquivos `Strings` está desativada no momento. Esses arquivos podem conter regras sensíveis à formatação e exigem tratamento seguro específico.

## Provedores de tradução

### Provedores sem chave

As opções web integradas incluem Google Translate Web, Yandex Web, Bing Translator Web e MyMemory Web. Google Translate Web é a configuração padrão com um único provedor.

Serviços web públicos podem limitar requisições, mudar de comportamento ou ficar temporariamente indisponíveis. Verificações de saúde, intervalos de repetição e o disjuntor de rede evitam ciclos infinitos de falha.

### Provedores de API e locais

O menu também oferece suporte a:

- ChatGPT / OpenAI;
- Claude;
- servidores locais ou remotos compatíveis com OpenAI;
- OpenRouter;
- DeepSeek;
- Gemini;
- Google Cloud Translation;
- Microsoft Translator;
- DeepL e DeepL Pro;
- LibreTranslate;
- Apertium e proxies de tradução compatíveis.

Para usar um provedor de API, selecione-o e preencha o endpoint, o modelo, a chave de API e os campos específicos mostrados na interface. Use **Check providers now (Verificar provedores agora)** antes de iniciar um lote grande.

As credenciais são salvas nas configurações do mod pelo RimWorld. Não publique nem compartilhe arquivos de configuração que contenham chaves privadas.

### Modo com vários provedores

O modo com vários provedores divide as entradas pendentes entre serviços configurados e pode executar requisições em paralelo. Cada slot possui seu próprio valor de concorrência. Comece com limites conservadores; aumentar demais a concorrência pode provocar limitação do serviço sem melhorar a qualidade.

Os perfis permitem salvar várias configurações para o mesmo provedor, como um modelo local e um endpoint remoto compatível com OpenAI.

## Controles por mod

A aba **Mods** lista os mods ativos e mostra as quantidades escaneadas, pendentes e traduzidas.

- Desative a tradução de um mod que já tenha um pacote de idioma preferido ou não precise de tradução automática.
- Use **Apply (Aplicar)** para solicitar a aplicação das entradas prontas em tempo de execução.
- Use **Finish translation (Concluir tradução)** para recolocar entradas ausentes ou com falha no fluxo.
- Use **Reset (Redefinir)** quando o estado gerado de um mod precisar ser reconstruído.
- Use **Rescan active mods now (Escanear novamente os mods ativos)** após mudar o escopo ou a lista de mods ativos.

Mods desativados continuam visíveis nas estatísticas, mas novas entradas deles não são adicionadas à fila.

## Editor de tradução

Abra **Editor > Open translation editor (Abrir editor de tradução)** para iniciar a área de trabalho em tela cheia.

O editor permite:

- agrupar a memória de tradução por mod;
- pesquisar originais, chaves e traduções;
- editar manualmente o texto traduzido;
- devolver uma entrada para a tradução automática;
- restaurar ou copiar o texto original;
- salvar correções humanas na memória local;
- enviar um mod selecionado como tradução do autor quando o compartilhamento estiver configurado.

Edições manuais ativam os agendadores de aplicação e geração de pacotes. Algumas mudanças aparecem durante o jogo; conteúdo Def sensível a formato pode ficar totalmente visível somente após a próxima inicialização.

## Biblioteca compartilhada

A biblioteca é opcional e permanece desativada até que seus controles sejam habilitados.

Os fluxos disponíveis incluem:

- baixar traduções-base verificadas e reutilizáveis;
- procurar e baixar pacotes de autores;
- avaliar um pacote de autor;
- enviar uma tradução completa de um mod selecionado;
- enviar correções humanas quando essa opção de compartilhamento estiver ativada.

Downloads e uploads são controlados separadamente. Ativar downloads não exige ativar uploads. Operações de envio podem exigir autorização do serviço, e os pacotes enviados podem ser revisados antes de se tornarem traduções compartilhadas confiáveis.

A biblioteca reduz chamadas repetidas aos provedores: quando já existe uma tradução compatível, ela pode ser reutilizada em vez de traduzir o mesmo texto novamente.

## Arquivos locais e segurança

Auto Translation Framework não modifica os arquivos originais de outros mods do Steam Workshop.

A pasta de armazenamento local contém:

- `TranslationMemoryV2.jsonl` — memória de tradução persistente;
- `GeneratedPacks` — dados de localização gerados;
- `LibraryModStateV1.jsonl` — estado local da biblioteca compartilhada;
- `HumanCorrectionsV1.jsonl` — correções manuais aguardando envio;
- `PipelineDiagnostics.log` — eventos de diagnóstico.

Use **Advanced/Debug > Open local files folder (Avançado/Depuração > Abrir pasta de arquivos locais)** para abrir a localização correta da plataforma.

O XML gerado pertence ao cache do framework. Faça correções permanentes pelo editor de tradução, em vez de editar diretamente os arquivos gerados.

## Solução de problemas

### Nada está sendo traduzido

1. Confirme se o interruptor principal em **Overview** está ativado.
2. Verifique o idioma de destino resolvido em **Overview**.
3. Confirme se o mod afetado está ativado em **Mods**.
4. Confirme em **Advanced** se os escopos Keyed, DefInjected ou interface C# estão ativados.
5. Verifique o estado do provedor em **Translators**.
6. Execute **Rescan active mods now** ou **Restart translation workflow**.

### O provedor continua falhando

- Execute **Check providers now**.
- Verifique endpoint, modelo, chave de API, região e campos específicos do provedor.
- Reduza a concorrência e o tamanho dos lotes se o serviço indicar limitação ou timeout.
- Aguarde o intervalo de repetição mostrado, em vez de reiniciar as requisições repetidamente.
- Teste outro provedor para identificar uma falha específica do serviço.

### Alguns textos em inglês permanecem

- Confirme se a tradução de interface C# está ativada.
- Abra uma vez a janela do mod relevante para que o texto em tempo de execução possa ser observado e enfileirado.
- Verifique se o texto é dinâmico, gráfico ou produzido por um caminho de interface personalizado não suportado.
- Reinicie o RimWorld após um lote grande de DefInjected, para que o cache XML seja carregado desde o início.

### Queda de desempenho com muitos mods

- Primeiro desative a tradução de interface C# e compare o desempenho.
- Reduza os workers de escaneamento e a concorrência dos provedores.
- Mantenha o log de depuração desativado durante o jogo normal.

### São necessárias mais informações de diagnóstico

Abra **Debug**, examine o snapshot do processo e use **Open pipeline diagnostics log**. Ao relatar o problema na [página do Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650), inclua o estado relevante e uma descrição curta para reprodução. Não inclua chaves de API nem tokens privados.

## Limitações atuais

- A cobertura C# em tempo de execução não intercepta todos os caminhos personalizados ou textos gerados dinamicamente.
- Provedores podem produzir terminologia incorreta mesmo quando a validação de formato é aprovada.
- Arquivos genéricos `Strings` ainda não são traduzidos.
- Algumas traduções concluídas exigem reinicialização para aparecer em todos os lugares.
- A disponibilidade dos provedores e da biblioteca depende de serviços externos de rede.

[Voltar para a visão geral do projeto](index.html)
