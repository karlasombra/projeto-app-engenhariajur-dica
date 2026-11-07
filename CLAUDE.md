# Projeto App — Engenharia Jurídica

> Arquivo de entrada para qualquer chat, sessão ou skill do Claude que trabalhe neste projeto.
> **Leia este arquivo inteiro antes de fazer qualquer coisa.**

## O que é

Aplicativo para **ajudar pessoas idosas a reconhecer o estelionato digital** (nome: **Será Golpe?**). Projeto em grupo da AV2 de Design Thinking (Prof. Cláudio Meireles Jr).
**Objetivo final:** entregar um app que atenda aos critérios da disciplina e garanta a aprovação.

Tudo que diz respeito ao projeto vive nesta pasta (`C:\projeto-app-engenhariajurídica`). Ela é a **única fonte da verdade**: se uma informação não está aqui, ela não foi decidida.

## Fase atual

**Fase 1 — Contexto e fundação** (sem código ainda).
Ver [STATUS.md](STATUS.md) para o andamento e os próximos passos.

## Mapa da pasta

| Caminho | Para que serve |
|---|---|
| [STATUS.md](STATUS.md) | Onde o projeto está, o que falta, próximos passos. Atualizar ao fim de cada sessão. |
| [docs/01-contexto-academico.md](docs/01-contexto-academico.md) | Disciplina, professor, critérios de avaliação, entregas e prazos. |
| [docs/02-visao-do-produto.md](docs/02-visao-do-produto.md) | Problema, público, proposta de valor, escopo e fora de escopo. |
| [docs/03-requisitos.md](docs/03-requisitos.md) | Requisitos funcionais, não funcionais e histórias de usuário. |
| [docs/04-fluxos-e-telas.md](docs/04-fluxos-e-telas.md) | Fluxos do usuário e lista de telas. |
| [docs/05-arquitetura-e-stack.md](docs/05-arquitetura-e-stack.md) | Tecnologias, arquitetura, padrões de código. |
| [docs/06-glossario.md](docs/06-glossario.md) | Termos jurídicos e técnicos usados no projeto. |
| [docs/decisoes/](docs/decisoes/) | Registro de decisões (uma decisão por arquivo). |
| [referencias/](referencias/) | Material da disciplina: enunciado, slides, rubricas, exemplos. |
| `base do app/` | Artefatos do grupo (árvore de problemas, perfil do cliente, quadro comparativo, Canvas). **Base de todo o app.** Não editar os originais. |
| [storyboard/](storyboard/) | Storyboard da AV2. `propostas/` tem as 4 propostas de design (PNG + HTML editável); `v1-olho-vivo/` é a versão descartada. |
| `app/` | Código do aplicativo (criado a partir da Fase 3). |
| `.claude/skills/` | Skills específicas deste projeto. |

## Regras de trabalho (para qualquer chat)

1. **Comece pelo contexto.** Leia este arquivo e o `STATUS.md`. Consulte os docs relevantes antes de propor ou alterar algo.
2. **O critério de sucesso é a avaliação da disciplina.** Toda decisão deve ser justificável pelos critérios em `docs/01-contexto-academico.md`. Na dúvida, priorize o que conta nota.
3. **Não invente requisitos.** Se algo não está documentado, pergunte ao usuário ou marque como `A DEFINIR`. Nunca preencha lacunas com suposições silenciosas.
4. **Decisões ficam registradas.** Toda escolha relevante (stack, escopo, mudança de fluxo) vira um arquivo em `docs/decisoes/` usando o modelo `0000-modelo.md`.
5. **Docs e código andam juntos.** Mudou um fluxo, requisito ou tecnologia? Atualize o documento correspondente na mesma sessão.
6. **Use o glossário.** Termos de domínio seguem `docs/06-glossario.md`; termo novo entra lá.
7. **Feche a sessão atualizando o `STATUS.md`** (o que foi feito, o que falta, próximos passos).

## Convenções

- Idioma da documentação e da interface: **português (Brasil)**.
- IDs: requisitos funcionais `RF-01`, não funcionais `RNF-01`, histórias `HU-01`, telas `T-01`, fluxos `F-01`, decisões `0001`.
- Marcador de lacuna: `A DEFINIR` (buscável em toda a pasta).
- Convenções de código: definidas em `docs/05-arquitetura-e-stack.md` quando a stack for escolhida.

## Fases do projeto

1. **Contexto e fundação** — estrutura de documentação, contexto acadêmico, visão do produto.
2. **Especificação** — requisitos, fluxos, telas, stack.
3. **Construção** — desenvolvimento do app em `app/`.
4. **Validação e entrega** — testes, ajustes, material de apresentação.
