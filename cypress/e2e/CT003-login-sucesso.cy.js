describe('CT003 - Realizar Login com sucesso', () => {
    beforeEach(() => {
      // Acessa a página de login diretamente, onde já existe uma conta
      cy.visit('https://challenge.primecontrol.com.br/app');
    });
  
    it('Deve realizar login com sucesso ao inserir email e senha válidos', () => {
      // Passo 1: Preencher o campo de email com um email válido
      cy.get('input[type="email"]').type('test@example.com'); // Substitua pelo email válido
  
      // Passo 2: Preencher o campo de senha com a senha válida
      cy.get('input[type="password"]').type('senha123'); // Substitua pela senha válida
  
      // Passo 3: Clicar no botão "Acessar"
      cy.contains('button', 'Acessar').click({ force: true });
  
      // Passo 4: Verificar se a URL foi alterada para "/app/home"
      cy.url().should('include', '/app/home'); // Verifica se a URL inclui "/app/home", indicando que o login foi bem-sucedido
    });
  });
  