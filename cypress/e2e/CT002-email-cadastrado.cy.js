describe('CT002 - Validar criação de uma conta com email já cadastrado', () => {
  beforeEach(() => {
      // Antes de cada teste, visitamos a página inicial
      cy.visit('https://challenge.primecontrol.com.br/');
  });

  it('Deve exibir mensagem de erro ao tentar criar conta com email já cadastrado', () => {
      // Passo 1: Clicar no botão "Criar uma conta"
      cy.contains('Criar uma conta').click({ force: true });

      // Passo 2: Preencher o campo de email com um email já cadastrado (exemplo)
      cy.get('input[type="email"]').type('test@example.com'); // Substitua com um email já cadastrado

      // Passo 3: Preencher o campo de senha
      cy.get('input[type="password"]').type('senha123');

      // Passo 4: Clicar no botão "Criar conta"
      cy.contains('Criar conta').click();

      // Passo 5: Verificar se a mensagem de erro aparece
      cy.contains('Esse email já está em uso por outra conta', { timeout: 10000 }) // Busca o texto diretamente na página
          .should('be.visible'); // Verifica que a mensagem é exibida

      // Passo 6: Garantir que o usuário permaneça na página de criação de conta
      cy.url().should('include', '/app/novaconta'); // Verifica que o usuário ainda está na página de criação de conta
  });
});
