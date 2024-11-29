describe('CT009 - Validar preenchimento de campos obrigatórios na aba Cadastrar Cliente', () => {
    it('Não deve habilitar o botão "Salvar" quando os campos obrigatórios não forem preenchidos ou estiverem no formato inválido', () => {
        cy.visit('https://challenge.primecontrol.com.br/app');

        // Login
        cy.get('#floatingInput').type('testuser@example.com');
        cy.get('#floatingPassword').type('password123');
        cy.contains('button', 'Acessar').click();

        // Aguardar carregar e acessar "Cadastrar Cliente"
        cy.url().should('include', '/app/home');
        cy.contains('Cadastrar Cliente').click();

        // Preencher alguns campos obrigatórios, mas não todos
        cy.get('div.form-group input[type="text"]').first().type('Izabel Muller'); // Nome
        cy.get('input[type="tel"]').first().type('41987592222'); // Telefone

        // Verificar se o botão "Salvar" continua desabilitado (porque o E-mail e CEP não foram preenchidos)
        cy.get('button.salvar').should('be.disabled'); 

        // Agora preencher o campo de "E-mail" com um formato inválido
        cy.get('div.col label:contains("E-mail:") + input').type('usuarioteste9@'); // E-mail inválido

        // Verificar se o botão "Salvar" ainda está desabilitado
        cy.get('button.salvar').should('be.disabled'); 

        // Preencher o "E-mail" corretamente
        cy.get('div.col label:contains("E-mail:") + input').clear().type('usuarioteste9@testing.com');

        // Verificar se o botão "Salvar" continua desabilitado, pois existem campos vazios
        cy.get('button.salvar').should('be.disabled'); 
    });
});
