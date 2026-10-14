# Central de Atendimento ao Cliente TAT - Testes Automatizados 🌲☁️

[![End-to-end tests](https://github.com/SEU_USUARIO/cypress-do-zero-a-nuvem/actions/workflows/ci.yml/badge.svg)](https://github.com/SEU_USUARIO/cypress-do-zero-a-nuvem/actions/workflows/ci.yml)

Projeto de automação de testes ponta a ponta (E2E) desenvolvido com **Cypress** para a aplicação web **CAC TAT** (Central de Atendimento ao Cliente TAT).

Este repositório foi construído como uma **extensão prática de aprendizado** baseada no curso *"Cypress, do Zero à Nuvem"* da [Talking About Testing](https://talkingabouttesting.com/), indo além dos exercícios propostos com melhorias visuais e estruturação profissional de testes.

---

## 🎨 Diferencial: Novo Layout

A aplicação recebeu uma reformulação visual completa (`src/style.css`):
- **Visual moderno & Dark Gradient:** Fundo escuro imersivo com cartões em contraste limpo.
- **Tipografia:** Tipografia *Plus Jakarta Sans* para maior legibilidade e sofisticação.
- **Totalmente Responsivo:** Layout adaptado para diferentes resoluções sem quebrar elementos ou formulários.
- **Compatibilidade 100% com Testes:** Todos os seletores, tags, validações e comportamentos esperados (como mensagens com `display: none`) foram preservados.

---

## 📋 Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- Node.js (versão LTS recomendada)
- Gerenciador de dependências npm
- Git

---

## 🚀 Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/SEU_USUARIO/cypress-do-zero-a-nuvem.git
   cd cypress-do-zero-a-nuvem
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

---

## 🧪 Comandos para Executar os Testes

### Modo Interativo (Cypress App / GUI)

- **Desktop:**
  ```bash
  npm run cy:open
  ```
- **Mobile (410x860):**
  ```bash
  npm run cy:open:mobile
  ```

### Modo Headless (Execução no Terminal)

- **Desktop:**
  ```bash
  npm test
  ```
- **Mobile (410x860):**
  ```bash
  npm run test:mobile
  ```

---

## ⚙️ Principais Configurações e Recursos

- **Simulação Mobile:** Scripts pré-configurados no `package.json` utilizando a flag `--config viewportWidth=410,viewportHeight=860`.
- **Comandos Customizados:** Ações frequentes encapsuladas em comandos reutilizáveis (`cypress/support/commands.js`).
- **Controle de Tempo e Chamadas Avançadas:** Uso de recursos como `cy.clock()`, `cy.tick()`, `.invoke()` e `cy.request()`.
- **Integração Contínua (CI):** Execução automática de toda a suíte a cada push/pull request via GitHub Actions (`.github/workflows/ci.yml`).

___

Este é um curso da **Escola Talking About Testing**.
