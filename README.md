# Challenge Cypress 🚀
Este projeto foi desenvolvido como um desafio para demonstrar habilidades em automação de testes utilizando o Cypress.

## Índice
- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Como Clonar e Configurar](#como-clonar-e-configurar)
- [Como Instalar o Cypress](#como-instalar-o-cypress)
- [Executando os Testes](#executando-os-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contato](#contato)

---

## Visão Geral 🚀
Este projeto utiliza o Cypress para automatizar testes de interface e APIs, garantindo que os recursos da aplicação sejam testados de forma eficaz.

---

## Pré-requisitos 🚀
Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:
- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [Git](https://git-scm.com/)
- Navegador Chrome, Firefox ou Edge
- Editor de código (recomendado: [VSCode](https://code.visualstudio.com/))

---

## Como Clonar e Configurar 🚀
Siga os passos abaixo para baixar e configurar o projeto:

```bash
# Clone o repositório
git clone https://github.com/iza-muller/challenge-cypress.git

# Acesse o diretório do projeto
cd challenge-cypress

Como Instalar o Cypress 🚀
Para instalar o Cypress, execute os seguintes comandos:
# Instale o Cypress como dependência de desenvolvimento
npm install cypress --save-dev

# Verifique a instalação do Cypress
npx cypress verify

# Abra o Cypress pela primeira vez
npx cypress open

# (Opcional) Configure o arquivo cypress.json com as seguintes opções:
echo '{
  "pluginsFile": false,
  "viewportHeight": 880,
  "viewportWidth": 1280
}' > cypress.json

Executando os Testes 🚀
Para executar os testes, você pode escolher entre duas opções:
# 1. Abra o Test Runner do Cypress
npx cypress open

# 2. Execute os testes em modo headless (sem interface gráfica)
npx cypress run

Estrutura do Projeto 🚀
challenge-cypress/
├── cypress/
│   ├── fixtures/       # Arquivos de dados estáticos
│   ├── integration/    # Testes automatizados
│   ├── plugins/        # Configurações de plugins
│   └── support/        # Comandos customizados
├── package.json        # Configuração do projeto
├── README.md           # Documentação do projeto
└── cypress.json        # Configurações do Cypress

Contato 🚀
Caso tenha dúvidas ou precise de suporte, entre em contato:

Nome: Izabel Muller
E-mail: iza.rellum@gmail.com
GitHub: iza-muller
