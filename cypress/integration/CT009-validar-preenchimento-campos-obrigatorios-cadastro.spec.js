describe('CT009 - Validar preenchimento de campos obrigatórios na aba Cadastrar Cliente', () => {
    it('Deve impedir o salvamento quando os campos obrigatórios não são preenchidos ou estiverem fora do formato esperado', () => {
        // Passo 1: Fazer login com sucesso usando as credenciais fornecidas
        cy.visit('https://challenge.primecontrol.com.br/app');
        
        // Passo 2: Preencher o campo de login (email e senha)
        cy.get('#floatingInput').type('testuser@example.com'); // E-mail válido
        cy.get('#floatingPassword').type('password123'); // Senha válida
        cy.get('button[type="button"]').contains('Acessar').click();

        // Passo 3: Esperar a página de home carregar e verificar se a URL é correta
        cy.url().should('include', '/app/home');
        
        // Passo 4: Aguardar o link 'Cadastrar Cliente' aparecer e clicar nele
        cy.get('a.nav-link').contains('Cadastrar Cliente').should('be.visible').click({ timeout: 10000 });

        // Passo 5: Preencher o campo "Nome Completo" com um valor válido
        cy.get('div.form-group input[type="text"]').first().type('Izabel Muller', { force: true }); // Nome válido

        // Passo 6: Preencher o campo "Telefone" com um valor válido
        cy.get('input[type="tel"]').first().type('41987592222', { force: true }); // Telefone válido

        // Passo 7: Preencher o campo "Email" com um e-mail válido
        cy.get('div.col label:contains("E-mail:") + input').type('usuarioteste9@testing.com', { force: true }); // E-mail válido

        // Passo 8: Deixar o campo "CEP" vazio
        cy.get('input[pattern="[0-9]{5}-[0-9]{3}"]').first().clear(); // Limpar CEP

        // Passo 9: Verificar se o botão "Salvar" está desabilitado, pois o CEP está vazio
        cy.get('.btn.btn-primary.salvar').should('be.disabled'); // O botão deve estar desabilitado porque o campo "CEP" está vazio

        // Passo 10: Validar se os campos obrigatórios com dados válidos não estão com erro
        cy.get('div.form-group input[type="text"]').first().should('not.have.class', 'is-invalid'); // Nome não deve ser inválido
        cy.get('input[type="tel"]').first().should('not.have.class', 'is-invalid'); // Telefone não deve ser inválido
        cy.get('div.col label:contains("E-mail:") + input').should('not.have.class', 'is-invalid'); // E-mail não deve ser inválido
        cy.get('input[pattern="[0-9]{5}-[0-9]{3}"]').first().should('have.class', 'is-invalid'); // CEP deve ser inválido

        // Passo 11: Preencher o campo "CEP" com um valor válido
        cy.get('input[pattern="[0-9]{5}-[0-9]{3}"]').first().type('80530-000', { force: true }); // CEP válido

        // Passo 12: Verificar se o botão "Salvar" agora está habilitado
        cy.get('.btn.btn-primary.salvar').should('be.enabled'); // O botão "Salvar" deve estar habilitado agora que todos os campos obrigatórios foram preenchidos corretamente
    });
});
