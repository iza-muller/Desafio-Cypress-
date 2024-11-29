describe('CT011 - Recuperar senha de acesso', () => {
  it('Deve permitir que o usuário recupere sua senha ao clicar em "Esqueci minha senha"', () => {
      // Passo 1: Acessar a página de login
      cy.visit('https://challenge.primecontrol.com.br/app');

      // Passo 2: Verificar se o link "Esqueci minha senha" está visível
      cy.get('a.mx-3').contains('Esqueci minha senha')
        .should('be.visible') // Verificar se o link está visível
        .click(); // Clicar no link "Esqueci minha senha"

      // Passo 3: Verificar se foi redirecionado para a página de recuperação de senha
      cy.url().should('include', '/app/resetsenha');

      // Passo 4: Preencher com o e-mail gerado do Guerrilla
      const email = 'testetestet@sharklasers.com'; // Alterar para o email gerado no Guerrilla
      cy.get('input#floatingInput[type="email"]').type(email); // Preencher com o e-mail gerado

      // Passo 5: Clicar no botão "Enviar" para recuperação de senha
      cy.get('button.w-100.btn.btn-lg.btn-primary.mt-3').click();

      // Passo 6: Verificar se a mensagem de sucesso é exibida no formato esperado
      cy.get('div.alert.alert-success.mt-2[role="alert"]', { timeout: 10000 }).should('be.visible')
        .and('contain.text', 'Email enviado com sucesso');

      // Passo 7: Simular a recuperação de senha e realizar login com nova senha
      // (sem precisar acessar o e-mail, a senha será considerada alterada)
      cy.get('#floatingInput').type(email); // Usar o mesmo email gerado do Guerrilla
      cy.get('#floatingPassword').type('novaSenha123'); // Nova senha (simulada)
      cy.get('button[type="button"]').contains('Acessar').click();

      // Passo 8: Validar que o login foi realizado com sucesso
      cy.url().should('include', '/app/home');
  });
});
