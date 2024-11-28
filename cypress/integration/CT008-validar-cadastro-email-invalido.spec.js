describe('CT008 - Validar Cadastro de Clientes com Email inválido na aba Perfil', () => {
    it('Deve mostrar mensagem de erro ao cadastrar cliente com email inválido', () => {
        // Passo 1: Fazer login com sucesso usando as credenciais fornecidas
        cy.visit('https://challenge.primecontrol.com.br/app');
        
        // Passo 2: Preencher o campo de login (email e senha)
        cy.get('#floatingInput').type('testuser@example.com'); // E-mail válido
        cy.get('#floatingPassword').type('password123'); // Senha válida
        cy.get('button[type="button"]').contains('Acessar').click();

        // Passo 3: Esperar a página de home carregar e verificar se a URL é correta
        cy.url().should('include', '/app/home');
        
        // Passo 4: Navegar até a listagem de clientes
        cy.get('a.nav-link').contains('Cadastrar Cliente').should('be.visible').click();

        // Passo 5: Preencher os dados obrigatórios no formulário de cadastro
        // Preencher o campo "Nome Completo"
        cy.get('div.form-group input[type="text"]').first().type('João Silva', { force: true }); // Nome completo
        
        // Preencher o campo "Telefone" (formato ajustado)
        cy.get('input[type="tel"]').first().type('41987592222', { force: true }); // Telefone sem formatação

        // Preencher o campo "Email" com um formato inválido
        cy.get('div.col label:contains("E-mail:") + input').type('joao@', { force: true }); // Email inválido sem "."
        
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

        // Passo 7: Clicar no botão "Salvar"
        cy.get('.btn.btn-primary.salvar').click({ force: true });

        // Passo 8: Verificar se foi exibida a mensagem de erro para email inválido
        cy.get('.alert-danger').should('be.visible').and('contain', 'Deve exibir dicas de emails validos.');
    });
});
