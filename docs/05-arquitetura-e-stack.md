# 05 — Arquitetura e stack

> Decisão: [0005](decisoes/0005-app-web-instalavel-pwa.md).

## Stack

| Camada | Tecnologia | Decisão |
|---|---|---|
| Plataforma | Site instalável no celular (PWA) | 0005 |
| Front-end | HTML + CSS + JavaScript puro, em um único `index.html` | 0005 |
| Back-end | Nenhum (tudo simulado) | 0005 |
| Banco de dados | Nenhum; preferências no `localStorage` do celular | 0005 |
| Autenticação | Simulada (qualquer senha de 4 números ou "digital") | 0005 |
| Hospedagem / publicação | GitHub Pages | 0005 |
| Fonte | Nunito (Google Fonts), com reserva para a fonte do sistema | — |

## Visão geral da arquitetura

- `TELAS`: cada tela é uma função que devolve o HTML e uma função `montar()` com os eventos.
- `go()` / `voltar()`: navegação com pilha de telas; o botão "voltar" do Android funciona.
- `analisar(texto)`: procura sinais de golpe por palavras-chave (`SINAIS`) e decide o sinal: **vermelho** (3+ sinais, ou 2 com um grave), **amarelo** (1 ou 2), **verde** (nenhum).
- `sw.js`: guarda os arquivos no celular para funcionar sem internet.

## Modelo de dados (simulado)

| Entidade | Campos principais | Onde |
|---|---|---|
| Usuária | nome, idade, nascimento, cidade, celular, plano | `USER` |
| Pessoa de confiança | nome, relação, recebe aviso, cor | `CONTATOS` |
| Sinal de golpe | id, rótulo, ícone, expressão regular | `SINAIS` |
| Vídeo (aula) | título, duração, pontos do resumo | `AULAS` |
| Alerta | título, quando, texto, aula relacionada | `ALERTAS` |
| Verificação | texto, sinal, tipo, data | `S.historico` |

## Estrutura de pastas de `app/`

```
app/
  index.html            o app inteiro
  manifest.webmanifest  nome, cores e ícones para instalar
  sw.js                 funcionamento sem internet
  icones/               ícone do app (svg e png)
  LEIA-ME.md            como abrir, publicar e apresentar
```

## Padrões de código

- Nomes em português (telas, funções e dados), seguindo o glossário.
- Sem dependências nem etapa de build.
- Commits: mensagem curta em português.

## Como rodar o projeto

Ver `app/LEIA-ME.md`.
