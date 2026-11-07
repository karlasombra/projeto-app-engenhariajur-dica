# 0006 — Logo: Lupa semáforo

- **Data:** 07/11/2026
- **Status:** aceita

## Contexto

O app precisava de um logo para a abertura (antes da senha), para aparecer discreto dentro do app e para o ícone do celular. Foram criadas 6 opções (em `storyboard/logos/`): Balão de mensagem, Lupa semáforo, Escudo semáforo, Interrogação, Celular semáforo e Placa de atenção.

## Decisão

Logo escolhido: **opção 2, Lupa semáforo**. É uma lupa (a mesma do botão "Verificar") com o semáforo verde, amarelo e vermelho dentro da lente. O kit completo está em [`logo/`](../../logo/), com as regras de uso em `logo/LEIA-ME.md`.

## Alternativas consideradas

- As outras 5 opções de `storyboard/logos/`.

## Consequências

- O app usa o logo na abertura (as luzes acendem uma a uma), na tela de senha, no topo do Início e no ícone instalado no celular.
- `sw.js` passou para a versão `v2`, para os celulares baixarem os ícones novos.
