describe('CT005 - Realizar Cadastro de Clientes com sucesso', () => {
    it('Deve cadastrar um novo cliente com sucesso', () => {
        // Passo 1: Fazer login com sucesso usando as credenciais fornecidas
        cy.visit('https://challenge.primecontrol.com.br/app');
        
        // Passo 2: Preencher o campo de login (email e senha)
        cy.get('#floatingInput').type('testuser@example.com'); // E-mail válido
        cy.get('#floatingPassword').type('password123'); // Senha válida
        cy.get('button[type="button"]').contains('Acessar').click();

        // Passo 3: Esperar a página de home carregar e verificar se a URL é correta
        cy.url().should('include', '/app/home');
        
        // Passo 4: Aguardar o link 'Cadastrar Cliente' aparecer e clicar nele
        cy.get('a.nav-link').contains('Cadastrar Cliente').should('be.visible').click();

        // Passo 5: Preencher os dados obrigatórios no formulário de cadastro
        // Preencher o campo "Nome Completo"
        cy.get('div.form-group input[type="text"]').first().type('Izabel Muller', { force: true }); // Nome completo
        
        // Preencher o campo "Telefone" (formato ajustado)
        cy.get('input[type="tel"]').first().type('41987592222', { force: true }); // Telefone sem formatação

        // Preencher o campo "Email"
        cy.get('div.col label:contains("E-mail:") + input').type('iza.rellum@hotmail.com.br', { force: true }); // E-mail
        
        // Preencher o campo "CEP"
        cy.get('input[pattern="[0-9]{5}-[0-9]{3}"]').first().type('80530-000', { force: true }); // CEP
        
        // Preencher o campo "Número da Residência"
        cy.get('input[pattern="[0-9]+"]').eq(1).type('100', { force: true }); // Número da residência
        
        // Preencher o campo "Endereço"
        cy.get('div.col label:contains("Endereço:") + input').type('Av. Cândido de Abreu', { force: true }); // Endereço
        
        // Preencher o campo "Complemento"
        cy.get('div.col label:contains("Complemento:") + input').type('casa', { force: true }); // Complemento
        
        // Selecionar o "País" (Brasil)
        cy.get('select.form-control').select('br', { force: true }); // País: Brasil
        
        // Selecionar o gênero (Feminino)
        cy.get('input[type="radio"][name="genero"][value="feminino"]').check({ force: true }); // Gênero: Feminino
        
        // Selecionar ferramentas (Robot Framework e Cypress)
        cy.get('input[type="checkbox"][value="robot"]').check({ force: true }); // Robot Framework
        cy.get('input[type="checkbox"][value="cypress"]').check({ force: true }); // Cypress

        // Passo 6: Fazer upload da foto
        const imagePath = 'bel.jpg'; // Nome da imagem em cypress/fixtures
        cy.get('input[type="file"]').attachFile(imagePath);

        // Passo 7: Verificar se o botão "Salvar" está habilitado após preencher todos os campos
        cy.get('.btn.btn-primary.salvar')
            .should('be.enabled', { timeout: 10000 }) // Aumentar o timeout para 10 segundos
            .and('not.have.attr', 'disabled');

        // Passo 8: Clicar no botão "Salvar"
        cy.get('.btn.btn-primary.salvar').click({ force: true });

        // Passo 9: Verificar se o cadastro foi realizado com sucesso
        // Alterado para validar a mensagem ou comportamento esperado após o cadastro
        cy.get('.alert-success')
            .should('be.visible')
            .and('contain', 'Cadastro realizado com sucesso!'); // Verificar mensagem de sucesso
    });
});
