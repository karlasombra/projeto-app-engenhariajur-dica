# 03 — Requisitos

> Versão do MVP de apresentação (decisões [0004](decisoes/0004-design-proposta-d-semaforo.md) e [0005](decisoes/0005-app-web-instalavel-pwa.md)). Tudo é simulado.

## Requisitos funcionais

| ID | Descrição | Prioridade | Status |
|---|---|---|---|
| RF-01 | Entrar com senha de 4 números ou com a digital (simulada) | Alta | Feito |
| RF-02 | Aumentar o tamanho da letra (A+ na entrada e no Perfil: normal, grande, muito grande) | Alta | Feito |
| RF-03 | Verificar mensagem ou link: colar, falar (reconhecimento de voz do celular, com reserva simulada) ou foto (leitura simulada) | Alta | Feito |
| RF-04 | Mostrar o resultado em semáforo (verde, amarelo, vermelho), com os sinais encontrados e o que fazer | Alta | Feito |
| RF-05 | Ler o resultado em voz alta | Média | Feito |
| RF-06 | Avisar a família (escolher quem recebe; envio simulado) | Alta | Feito |
| RF-07 | Verificar notícia (mesma análise, com sinais de notícia falsa) | Média | Feito |
| RF-08 | Alertas de golpes da semana, com detalhe | Média | Feito |
| RF-09 | Aprender: vídeos curtos (simulados, com legenda e narração) e progresso | Média | Feito |
| RF-10 | Minha família: ver, ligar/mensagem (simulado), ligar/desligar avisos, adicionar pessoa | Média | Feito |
| RF-11 | Ajuda: perguntas frequentes e atendente pelo WhatsApp (chat simulado) | Média | Feito |
| RF-12 | Caí em um golpe: passo a passo, como denunciar e direitos | Alta | Feito |
| RF-13 | Perfil: dados da usuária, histórico de verificações, preferências, Premium (simulado), sair | Baixa | Feito |

## Requisitos não funcionais

| ID | Categoria | Descrição |
|---|---|---|
| RNF-01 | Usabilidade | Linguagem simples, sem termos técnicos; uma ação principal por tela |
| RNF-02 | Acessibilidade | Botões com no mínimo 44 px; letra ajustável; ícones + texto (não depende só da cor); leitura em voz alta |
| RNF-03 | Plataforma | Funciona no navegador do celular e pode ser instalado na tela inicial (PWA) |
| RNF-04 | Disponibilidade | Funciona sem internet depois do primeiro acesso |
| RNF-05 | Privacidade (LGPD) | O app só analisa o que a usuária mostrar; nada sai do celular; dados da demonstração são fictícios |

## Histórias de usuário

| ID | História | Critérios de aceite | RFs |
|---|---|---|---|
| HU-01 | **Como** pessoa idosa, **quero** colar uma mensagem suspeita, **para** saber se é golpe antes de agir | Resultado em semáforo com motivos e o que fazer | RF-03, RF-04 |
| HU-02 | **Como** pessoa idosa, **quero** avisar minha família, **para** ter apoio na decisão | Escolho quem recebe e vejo a confirmação | RF-06, RF-10 |
| HU-03 | **Como** pessoa idosa, **quero** saber o que fazer se caí em um golpe, **para** tentar recuperar meu dinheiro e denunciar | Passo a passo com banco (MED), BO e Disque 100 | RF-12 |
| HU-04 | **Como** pessoa idosa com pouca visão, **quero** letras maiores e ouvir o resultado, **para** entender sozinha | 3 tamanhos de letra e botão Ouvir | RF-02, RF-05 |
| HU-05 | **Como** pessoa idosa, **quero** vídeos curtos, **para** aprender a reconhecer golpes | Lista de vídeos e progresso | RF-09 |

## Regras de negócio / regras jurídicas

| ID | Regra | Fonte |
|---|---|---|
| RN-01 | Golpe é crime de estelionato | Código Penal, art. 171 |
| RN-02 | Fraude cometida por redes sociais, ligação, e-mail ou meio eletrônico: reclusão de 4 a 8 anos e multa (fraude eletrônica) | CP, art. 171, § 2º-A (redação da Lei 15.397/2026) |
| RN-03 | Contra pessoa idosa ou vulnerável, a pena aumenta de 1/3 ao dobro | CP, art. 171, § 4º (Lei 14.155/2021) |
| RN-04 | Pix feito por golpe: pedir ao banco a devolução pelo MED (Mecanismo Especial de Devolução) em até 80 dias | Regras do Pix / Banco Central |
| RN-05 | No Ceará, o BO de estelionato pode ser feito pela Delegacia Eletrônica (Deletron), 24 horas | Polícia Civil do Ceará |
| RN-06 | Denúncia de violência contra a pessoa idosa: Disque 100 (Direitos Humanos), ligação gratuita | Governo Federal |
| RN-07 | O app dá informação educativa; não substitui advogado ou Defensoria Pública | — |
