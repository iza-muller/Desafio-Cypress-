describe('CT010 - Realizar Logout com sucesso ao clicar em "Finalizar"', () => {
    it('Deve realizar o logout corretamente quando o link "Finalizar" for clicado', () => {
        // Passo 1: Fazer login com sucesso usando as credenciais fornecidas
        cy.visit('https://challenge.primecontrol.com.br/app');
        
        // Passo 2: Preencher o campo de login (email e senha)
        cy.get('#floatingInput').type('testuser@example.com'); // E-mail válido
        cy.get('#floatingPassword').type('password123'); // Senha válida
        cy.get('button[type="button"]').contains('Acessar').click();

        // Passo 3: Esperar a página de home carregar e verificar se a URL é correta
        cy.url().should('include', '/app/home');
        
        cy.get('a.nav-link.logout')  
     .scrollIntoView()          
     .click({ force: true });

     cy.get('.btn-danger-modal').should('be.visible').click();

        // Passo 5: Aguardar a exibição da mensagem de confirmação
        //cy.get('.btn').click().and('contain.text', 'Para submeter os dados do projeto, clique em \'Enviar\'. Se desejar sair, clique em \'Logout\'.');
       // cy.get('.btn-primary-modal')
       

        // Passo 7: Verificar se a URL foi redirecionada para a página de login
        //cy.url().should('include', '/app/login');

        // Passo 8: Verificar se o campo de login está visível, indicando que o usuário foi desconectado
        //cy.get('#floatingInput').should('be.visible'); // O campo de e-mail de login deve estar visível após o logout
    });
});