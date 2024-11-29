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
      cy.get('input#floatingInput[type="email"]').type('usertester10@gmail.com'); // Inserir o e-mail válido para recuperação

      // Passo 6: Clicar no botão "Enviar" para recuperação de senha
      cy.get('button.w-100.btn.btn-lg.btn-primary.mt-3').click(); // Clicar no botão "Enviar"

      // Passo 7: Verificar se a mensagem de sucesso é exibida com o texto correto
      cy.get('.alert.alert-success', { timeout: 10000 }).should('be.visible') // Verificar se a mensagem de sucesso é exibida
        .and('contain.text', 'Email enviado com sucesso'); // Ajuste do texto esperado

      // Passo 8: Aguardar o link "Fazer Login" aparecer e clicar
      cy.get('a.mx-3').contains('Fazer Login').should('be.visible').click(); // Clicar no link "Fazer Login"

      // Passo 9: Verificar o redirecionamento para a página de login
      cy.url().should('include', '/app'); // Confirmar redirecionamento para a tela de login

      // Passo 10: Validar se os campos de login estão visíveis
      cy.get('input#floatingInput').should('be.visible'); // O campo de e-mail no login
      cy.get('input#floatingPassword').should('be.visible'); // O campo de senha no login
  });
});
