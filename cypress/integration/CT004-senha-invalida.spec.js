describe('CT004 - Validar Login com senha inválida', () => {
    beforeEach(() => {
      // Passo 1: Acessar a página de login diretamente, onde já existe uma conta
      cy.visit('https://challenge.primecontrol.com.br/app');
    });
  
    it('Não deve realizar login e deve exibir uma mensagem de erro com senha inválida', () => {
      // Passo 2: Preencher o campo de email com um email válido
      cy.get('input[type="email"]').type('test@example.com'); // Substitua pelo email válido
  
      // Passo 3: Preencher o campo de senha com uma senha inválida
      cy.get('input[type="password"]').type('senhaerrada123'); // Substitua por uma senha inválida
  
      // Passo 4: Clicar no botão "Acessar"
      cy.contains('button', 'Acessar').click({ force: true });
  
      // Passo 5: Verificar se a mensagem de erro "E-mail ou senha inválida." aparece
      cy.contains('E-mail ou senha inválida.').should('be.visible'); // Verifica se a mensagem de erro está visível
    });
  });
  