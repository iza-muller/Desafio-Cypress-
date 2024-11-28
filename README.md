Aqui está o documento reestruturado conforme o padrão Markdown do GitHub:

Challenge Cypress


Este projeto foi desenvolvido como um desafio para demonstrar habilidades em automação de testes utilizando o Cypress.

Índice


1. #visão-geral
2. #pré-requisitos
3. #como-clonar-e-configurar
4. #como-instalar-o-cypress
5. #executando-os-testes
6. #estrutura-do-projeto
7. #contato

Visão Geral


Este projeto utiliza o Cypress para automatizar testes de interface e APIs, garantindo que os recursos da aplicação sejam testados de forma eficaz.

Pré-requisitos


Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- Node.js (versão 12 ou superior)
- Git
- Navegador Chrome, Firefox ou Edge
- Editor de código (recomendado: VSCode)

Como Clonar e Configurar


1. Clone o repositório: git clone https://github.com/iza-muller/challenge-cypress.git
2. Acesse o diretório do projeto: cd challenge-cypress

Como Instalar o Cypress


1. Instale o Cypress como dependência de desenvolvimento: npm install cypress --save-dev
2. Verifique a instalação do Cypress: npx cypress verify
3. Abra o Cypress pela primeira vez: npx cypress open
4. (Opcional) Configure o arquivo cypress.json:


{
  "pluginsFile": false,
  "viewportHeight": 880,
  "viewportWidth": 1280
}


Executando os Testes


1. Abra o Test Runner do Cypress: npx cypress open
2. Execute os testes em modo headless: npx cypress run

Estrutura do Projeto



challenge-cypress/
├── cypress/
│   ├── fixtures/      # Arquivos de dados estáticos
│   ├── integration/   # Testes automatizados
│   ├── plugins/       # Configurações de plugins
│   └── support/       # Comandos customizados
├── package.json      # Configuração do projeto
├── README.md         # Documentação do projeto
└── cypress.json      # Configurações do Cypress


Contato


Caso tenha dúvidas ou precise de suporte, entre em contato:

Nome: Izabel Muller
E-mail: iza.rellum@gmail.com
GitHub: iza-muller
