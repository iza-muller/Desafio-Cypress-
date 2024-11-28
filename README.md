# Challenge Cypress 🚀
Este projeto foi desenvolvido como um desafio para demonstrar habilidades em automação de testes utilizando o Cypress.

## Índice
- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Como Clonar e Configurar](#como-clonar-e-configurar)
- [Como Instalar o Cypress](#como-instalar-o-cypress)
- [Executando os Testes](#executando-os-testes)
- [Estrutura do Projeto](#estrutura-básica-do-projeto)
- [Contato](#contato)

---

## **Visão Geral** 🚀
Este projeto utiliza o Cypress para automatizar testes de interface e APIs. O objetivo é simular cenários reais, garantindo que os recursos da aplicação sejam testados de forma eficaz e clara.

---

## **Pré-requisitos** 🚀
Antes de começar, certifique-se de ter as ferramentas abaixo instaladas:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [Git](https://git-scm.com/)
- Navegador Chrome, Firefox ou Edge
- Editor de código (recomendado: [VSCode](https://code.visualstudio.com/))

---

## **Como Clonar e Configurar** 🚀
Siga os passos abaixo para baixar e configurar o projeto:

1. Clone o repositório:
   ```bash
   git clone https://github.com/iza-muller/challenge-cypress.git

2.  Acesse o diretório do projeto:
cd challenge-cypress

---

Como Instalar o Cypress 🚀
Siga os passos abaixo para instalar e configurar o Cypress:
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

