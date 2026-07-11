---
title: Auto Translation Framework
description: Tradução automática de mods para RimWorld
---

# Auto Translation Framework

[English](../index.html) | [Русский](../ru/index.html) | [简体中文](../zh-cn/index.html) | **Português (Brasil)**

![Prévia do Auto Translation Framework](../assets/preview.png)

[![RimWorld 1.6](https://img.shields.io/badge/RimWorld-1.6-8c5a3c)](https://rimworldgame.com/)
![Versão 1.0.11](https://img.shields.io/badge/version-1.0.11-2f81f7)
[![Steam Workshop](https://img.shields.io/badge/Steam-Workshop-1b2838?logo=steam)](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650)

Auto Translation Framework é um mod para RimWorld que traduz outros mods ativos sem modificar os arquivos deles no Steam Workshop. Ele procura localizações ausentes, reutiliza traduções locais e compartilhadas, envia os textos restantes para os provedores configurados e aplica com segurança as traduções concluídas durante o jogo, onde o RimWorld permite.

**[Instalar pelo Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650)** | **[Abrir o guia do usuário](user-guide.html)**

## O que ele traduz

- **Textos Keyed** usados por interfaces, alertas, mensagens e sistemas de mods.
- **Campos DefInjected**, como nomes, descrições, pensamentos, traits, itens, construções, eventos, pesquisas e campos Def personalizados compatíveis.
- **Parte dos textos de interface codificados diretamente em C#**, capturados durante a execução em janelas, botões, menus flutuantes, gizmos, dicas, textos de inspeção, cartas e mensagens.
- **Dados de tradução existentes** importados de mods de tradução compatíveis e caches de outros tradutores automáticos suportados.

O framework mantém uma memória de tradução persistente e gera um cache XML para as próximas inicializações. Traduções humanas existentes são preservadas por padrão e têm prioridade.

## Principais recursos

- Escaneamento automático na inicialização e fila de tradução em segundo plano.
- Detecção do idioma de destino pelo idioma atual da interface do RimWorld.
- Provedores web gratuitos que não exigem chave de API na configuração padrão.
- Suporte opcional a OpenAI, Claude, OpenRouter, DeepSeek, Gemini, DeepL, Microsoft, Google Cloud, LibreTranslate e serviços compatíveis com OpenAI.
- Modo com vários provedores, paralelismo configurável e perfis independentes.
- Controles de ativação, progresso, repetição, aplicação e redefinição para cada mod.
- Editor de tradução em tela cheia para pesquisar, corrigir e tentar novamente entradas individuais.
- Biblioteca compartilhada opcional com traduções-base verificadas, pacotes de autores, avaliações e correções humanas.
- Validação de placeholders, formatação e tags de rich text antes de aceitar o resultado.
- Diagnósticos locais, verificações de saúde dos provedores, intervalos de repetição e proteção contra falhas de rede.

## Início rápido

1. Instale o [Harmony](https://steamcommunity.com/sharedfiles/filedetails/?id=2009463077) e o [Auto Translation Framework](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650) pelo Steam Workshop.
2. Na lista de mods do RimWorld, coloque o Harmony antes do Auto Translation Framework.
3. Escolha o idioma que deseja usar no RimWorld.
4. Abra **Opções > Configurações de mods > Auto Translation Framework**.
5. Em **Overview (Visão geral)**, mantenha **Use RimWorld interface language (Usar o idioma da interface do RimWorld)** ativado.
6. Em **Translators (Tradutores)**, mantenha **Google Translate Web** para a configuração mais simples e sem chave, ou configure outro provedor.
7. Aguarde o escaneamento inicial. A aba **Mods** mostra o progresso e a quantidade de textos restantes para cada mod ativo.

O fluxo normal é automático. As configurações detalhadas e a solução de problemas estão no **[guia do usuário](user-guide.html)**.

## Como funciona o processo

1. Os mods ativos são escaneados em busca de textos traduzíveis compatíveis.
2. Traduções humanas existentes e a memória local são verificadas primeiro.
3. Se estiver ativada, a biblioteca compartilhada procura traduções verificadas reutilizáveis.
4. As entradas ausentes são enviadas para o provedor escolhido ou para o conjunto de provedores.
5. O resultado é validado para proteger placeholders, formatação e tags de rich text.
6. As traduções prontas são salvas localmente, aplicadas em tempo de execução onde for seguro e gravadas em um cache XML para as próximas inicializações.

Os arquivos originais dos mods do Steam Workshop não são modificados.

## Biblioteca compartilhada de traduções

A biblioteca compartilhada opcional reduz o trabalho repetido entre jogadores. Ela pode fornecer traduções-base verificadas e pacotes publicados por autores, receber correções humanas e reutilizar traduções prontas para os mesmos mods e idiomas.

Downloads e uploads são configurações separadas. O trabalho pode permanecer totalmente local, usar apenas downloads ou ativar explicitamente os recursos de compartilhamento. O material enviado pode passar por revisão automatizada antes de se tornar um pacote compartilhado confiável.

As informações sobre operação e financiamento estão na **[página de infraestrutura](infrastructure-and-funding.html)**.

## Segurança e limitações

- A qualidade depende do provedor, do texto original e do status de revisão dos dados da biblioteca.
- A tradução de texto codificado diretamente na interface funciona em modo best effort, pois alguns mods desenham a interface por caminhos totalmente personalizados.
- Algumas traduções DefInjected recém-geradas podem exigir a reinicialização do RimWorld para aparecer em todas as telas.
- O escopo `Strings` ainda não está ativado, pois esses arquivos exigem tratamento seguro específico para cada formato.
- Os recursos de API e rede podem ser desativados; credenciais só são necessárias para provedores que exigem uma chave.

O projeto é experimental e continua em desenvolvimento. Não é possível garantir cobertura completa de todos os mods ou de cada texto gerado dinamicamente.

## Links do projeto

- [Steam Workshop](https://steamcommunity.com/sharedfiles/filedetails/?id=3759370650)
- [Guia do usuário](user-guide.html)
- [Infraestrutura e financiamento](infrastructure-and-funding.html)

## Aviso legal

Portions of the materials used to create this content/mod are trademarks and/or copyrighted works of Ludeon Studios Inc. All rights reserved by Ludeon. This content/mod is not official and is not endorsed by Ludeon.
