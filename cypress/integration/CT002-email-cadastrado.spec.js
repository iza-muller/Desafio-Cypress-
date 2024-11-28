describe('CT002 - Validar criação de uma conta com email já cadastrado', () => {
    beforeEach(() => {
      // Antes de cada teste, visitamos a página inicial
      cy.visit('https://challenge.primecontrol.com.br/');
    });
  
    it('Deve exibir mensagem de erro ao tentar criar conta com email já cadastrado', () => {
      // Passo 1: Clicar no botão "Criar uma conta"
      cy.contains('Criar uma conta').click({ force: true });
  
      // Passo 2: Preencher o campo de email com um email já cadastrado (exemplo)
      cy.get('input[type="email"]').type('test@example.com');  // Substitua com um email que você sabe que já está cadastrado
  
      // Passo 3: Preencher o campo de senha
      cy.get('input[type="password"]').type('senha123');
  
      // Passo 4: Clicar no botão "Criar conta"
      cy.contains('Criar conta').click();
  
      // Passo 5: Esperar um pouco, caso necessário, e verificar se a mensagem de erro aparece
      cy.wait(2000);  // Espera 2 segundos
      cy.get('.error-message', { timeout: 10000 })  // Aumenta o tempo de espera para até 10 segundos
        .should('be.visible')
        .and('contain.text', 'Esse email já está em uso por outra conta');
      
      // Passo 6: Garantir que o usuário não foi redirecionado para a página /app
      cy.url().should('not.include', '/app');  // Verifica que o usuário não foi redirecionado para a página de conta criada
    });
  });
  