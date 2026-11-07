# 0005 — O app é um site instalável no celular (PWA), com dados simulados

- **Data:** 07/11/2026
- **Status:** aceita

## Contexto

O app é um MVP só para a apresentação final da disciplina, com tudo simulado ("mockado"). O grupo quer apresentar **no celular**, para dar mais credibilidade, e o prazo é **08/11/2026 à noite** (1 dia).

## Decisão

- O app é **um único `index.html`** (HTML + CSS + JavaScript puro, sem framework e sem instalação de nada), em `app/`.
- É um **PWA**: com `manifest.webmanifest`, ícone e `sw.js`, pode ser **adicionado à tela inicial** do celular e abre em tela cheia, como um app instalado. Depois do primeiro acesso, **funciona sem internet**.
- Publicação: **GitHub Pages**, no repositório do grupo.
- **Dados simulados:** usuária Maria das Graças Silva, 68 anos, Fortaleza – CE; família (Carlos, Ana Paula, Dona Neide); a análise da mensagem usa regras simples de palavras-chave (sem servidor nem IA).

## Alternativas consideradas

- App nativo (React Native / Flutter / Expo): exige instalação de ferramentas, build e APK. Arriscado para 1 dia e sem ganho para um protótipo simulado.
- Protótipo no Figma: não "funciona" de verdade no celular como um app.

## Consequências

- Roda em qualquer celular (Android e iPhone) e também no computador/projetor.
- Não existe back-end: nada é enviado de verdade (avisos, ligações e atendimento são simulados).
- Preferências (tamanho da letra, família, vídeos assistidos, histórico) ficam salvas só no próprio celular.
