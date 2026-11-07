# 0001 — Pasta do projeto como fonte única da verdade

- **Data:** 03/11/2026
- **Status:** aceita

## Contexto

O projeto será trabalhado em vários chats, sessões e skills diferentes do Claude. Sem um ponto central, o contexto se perde entre conversas e o app fica inconsistente.

## Decisão

Toda informação, decisão, documento e código do projeto vive em `C:\projeto-app-engenhariajurídica`. O `CLAUDE.md` na raiz é o ponto de entrada obrigatório, e o `STATUS.md` registra o andamento ao fim de cada sessão.

## Alternativas consideradas

- Manter o contexto só nas conversas — descartado: cada chat novo começaria do zero.

## Consequências

- Qualquer chat consegue retomar o trabalho lendo `CLAUDE.md` + `STATUS.md`.
- Exige disciplina de atualizar os documentos a cada sessão.
