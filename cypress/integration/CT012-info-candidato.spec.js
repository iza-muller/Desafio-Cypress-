describe('CT011 - Recuperar senha de acesso', () => {
    it('Deve permitir que o usuário recupere sua senha ao clicar em "Esqueci minha senha"', () => {
        // Passo 1: Acessar a página de login
        cy.visit('https://challenge.primecontrol.com.br/app');

        // Passo 2: Verificar se o link "Esqueci minha senha" está visível
        cy.get('a.mx-3').contains('Esqueci minha senha')
          .should('be.visible') // Verificar se o link está visível
          .click(); // Clicar no link "Esqueci minha senha"

        // Passo 3: Verificar se foi redirecionado para a página de recuperação de senha
        cy.url().should('include', '/app/resetsenha'); // Verificar se a URL está correta para recuperação de senha

        // Passo 4: Aguardar o campo de e-mail aparecer
        cy.get('input#floatingInput[type="email"]', { timeout: 10000 }).should('be.visible'); // Esperar o campo de e-mail

        // Passo 5: Preencher o e-mail para recuperação de senha
        cy.get('input#floatingInput[type="email"]').type('testuser@example.com'); // Inserir o e-mail válido para recuperação

        // Passo 6: Clicar no botão "Enviar" para recuperação de senha
        cy.get('button.w-100.btn.btn-lg.btn-primary.mt-3').click(); // Clicar no botão "Enviar"

        // Passo 7: Verificar se uma mensagem de sucesso é exibida
        cy.get('.alert-success').should('be.visible') // Verificar se a mensagem de sucesso é exibida
          .and('contain.text', 'Instruções de recuperação de senha enviadas para seu e-mail.');

        // Passo 8: Verificar se o usuário foi redirecionado para a página de login novamente
        cy.url().should('include', '/app/login'); // Verificar se o usuário é redirecionado para a página de login
    });
});
