# **Challenge Cypress** 🚀

Este projeto foi desenvolvido como um desafio para demonstrar habilidades em automação de testes utilizando o **Cypress**.

## **Índice**
1. [Visão Geral](#visão-geral)
2. [Pré-requisitos](#pré-requisitos)
3. [Como Clonar e Configurar](#como-clonar-e-configurar)
4. [Como Instalar o Cypress](#como-instalar-o-cypress)
5. [Executando os Testes](#executando-os-testes)
6. [Estrutura do Projeto](#estrutura-do-projeto)
7. [Contato](#contato)

---

## **Executando os Testes** 🚀

Para executar os testes no Cypress, você pode escolher entre duas opções: usando a interface gráfica do Cypress ou executando os testes em modo headless.

```bash
# 1. Abra o Test Runner do Cypress
# Este comando abrirá a interface gráfica do Cypress para executar os testes de forma visual.
npx cypress open

# 2. Execute os testes em modo headless (sem interface gráfica)
# Este comando executará os testes diretamente no terminal, ideal para automação e integração contínua.
npx cypress run


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

---

## **Como Instalar o Cypress** 🚀

Siga os passos abaixo para instalar e configurar o Cypress:

```bash
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

---

## **Estrutura Básica do Projeto** 🚀
challenge-cypress/
├── cypress/
│   ├── fixtures/       # Arquivos de dados estáticos
│   ├── integration/    # Testes automatizados
│   │   └── exemplo.spec.js  # Arquivo de exemplo
│   ├── plugins/        # Configurações de plugins
│   └── support/        # Comandos customizados e hooks
├── package.json        # Configuração do projeto
├── README.md           # Documentação do projeto
└── cypress.json        # Configurações do Cypress

---

## **Contato** 🚀
Se você tiver dúvidas ou precisar de suporte para rodar o projeto, entre em contato:

Nome: Izabel Muller
E-mail: iza.rellum@gmail.com
GitHub: iza-muller
