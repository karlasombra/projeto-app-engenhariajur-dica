# 04 — Fluxos e telas

> Vem do storyboard ([`storyboard/`](../storyboard/)) e do app construído em [`app/`](../app/) (decisões 0004 e 0005).

## Fluxos do usuário

### F-01 — Verificar uma mensagem suspeita

- **Persona:** Dona Maria, 68 anos.
- **Objetivo:** saber se uma mensagem recebida no WhatsApp é golpe antes de agir.
- **Passos:**
  1. Entra no app com a senha de 4 números ou a digital (T-01).
  2. Na tela de Início, vê o alerta da semana e toca em "Verificar mensagem ou link" (T-02).
  3. Cola a mensagem (ou fala, ou tira foto) e toca em "Será golpe?" (T-03, passo 1 de 2).
  4. O semáforo pisca enquanto o app confere a mensagem (T-03b, passo 2 de 2).
  5. Vê o resultado em sinal **vermelho, amarelo ou verde**, com os sinais encontrados e o que fazer. Pode ouvir, avisar a família ou ver como denunciar (T-04).
- **Telas envolvidas:** T-01, T-02, T-03, T-03b, T-04.

### F-02 — Caí em um golpe

Início ou Ajuda → "Caí em um golpe" (T-13): guardar provas → avisar o banco (MED) → boletim de ocorrência (Delegacia Eletrônica) → Disque 100 → família. Mostra os direitos (art. 171 do CP).

### F-03 — Verificar uma notícia

Início → Notícia (T-05) → passo 2 → resultado com "Notícia falsa!", "Cuidado!" ou "Parece confiável".

## Telas

| ID | Nome | Objetivo | Elementos principais |
|---|---|---|---|
| T-00 | Abertura | Apresentar a marca | Semáforo acendendo; "Será Golpe?" |
| T-01 | Entrar | Acesso simples e acessível | Senha de 4 números com teclas grandes; digital; A+ (letra); esqueci minha senha; preciso de ajuda |
| T-02 | Início | Ponto de partida das ações | Saudação + foto (abre o Perfil); alerta da semana; Verificar mensagem ou link; Notícia; Aprender; Família; Atendente; Alertas; Caí em um golpe; menu inferior |
| T-03 | Verificar (passo 1 de 2) | Receber o conteúdo suspeito | Colar / Falar / Foto; caixa da mensagem; exemplos para testar; "Será golpe?"; aviso de privacidade |
| T-03b | Analisando (passo 2 de 2) | Mostrar que o app está conferindo | Semáforo piscando; lista de conferências |
| T-04 | Resultado | Explicar o risco e orientar a ação | Sinal verde/amarelo/vermelho; Ouvir; sinais encontrados; o que fazer (sim e não); Avisar minha família; Como denunciar; Voltar ao início |
| T-05 | Verificar notícia | Conferir notícia | Igual à T-03, com exemplos de notícias |
| T-06 | Alertas | Golpes do momento | Lista de alertas |
| T-07 | Detalhe do alerta | Explicar o golpe | Texto; Ouvir; vídeo relacionado; verificar |
| T-08 | Aprender | Vídeos curtos | Progresso; lista de vídeos |
| T-09 | Vídeo | Assistir e revisar | Player simulado com legenda e narração; resumo; marcar como assistido |
| T-10 | Minha família | Pessoas de confiança | Ligar; mensagem; recebe avisos; adicionar pessoa |
| T-11 | Ajuda | Tirar dúvidas | Falar com uma pessoa; Caí em um golpe; perguntas frequentes |
| T-12 | Atendente | Atendimento humano | Chat no estilo WhatsApp (simulado) com respostas rápidas |
| T-13 | Caí em um golpe | Orientar e denunciar | 5 passos; MED; Delegacia Eletrônica; Disque 100; Seus direitos |
| T-14 | Perfil | Dados e preferências | Dados da Maria; verificações; tamanho da letra; digital; voz; histórico; Premium; sair |

## Navegação

Menu inferior fixo: **Início · Aprender · [Verificar] · Família · Ajuda**. O botão redondo do meio abre o Verificar.

## Identidade visual

**Escolhida: Proposta D – Semáforo** ([decisão 0004](decisoes/0004-design-proposta-d-semaforo.md)).

| Item | Valor |
|---|---|
| Cor principal | Roxo `#3f37c9` (sombra `#2b2499`) |
| Semáforo | Verde `#1f9d55` · Amarelo `#ffb703` · Vermelho `#e3342f` |
| Cores dos cartões | Notícia `#0f8fb3` · Aprender `#e8641c` · Família `#d1449a` · Atendente `#1f9d55` |
| Fundo | `#f6f6fb` |
| Fonte | Nunito (títulos em peso 900) |
| Forma | Cartões brancos arredondados (20 px) com sombra inferior; botões de 50 px |
| Logo | Lupa semáforo ([decisão 0006](decisoes/0006-logo-lupa-semaforo.md)); arquivos em [`logo/`](../logo/) |

As outras propostas (A, B, C) ficam em `storyboard/propostas/` só como histórico.

Em todas as telas:
- Tom da linguagem simples, acolhedor e sem termos técnicos.
- Botões com no mínimo 44 px de altura.
- Nenhuma tela de login com e-mail e senha (decisão do grupo de não seguir a estrutura do exemplo do professor).
