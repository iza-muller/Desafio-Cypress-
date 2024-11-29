describe('CT005 - Realizar Cadastro de Clientes com sucesso', () => {
    it('Deve cadastrar um novo cliente com sucesso', () => {
        cy.visit('https://challenge.primecontrol.com.br/app');
        
        // Realiza login
        cy.get('#floatingInput').type('testuser@example.com');
        cy.get('#floatingPassword').type('password123');
        cy.get('button[type="button"]').contains('Acessar').click();
        cy.url().should('include', '/app/home');
        
        // Acessa a tela de cadastro de cliente
        cy.get('a.nav-link').contains('Cadastrar Cliente').should('be.visible').click();

        // Preenche os dados do cliente
        cy.get('div.form-group input[type="text"]').first().type('Izabel Muller', { force: true });
        cy.get('input[type="tel"]').first().type('41987592222', { force: true });
        cy.get('div.col label:contains("E-mail:") + input').type('iza.rellum@hotmail.com.br', { force: true });
        cy.get('input[pattern="[0-9]{5}-[0-9]{3}"]').first().type('80530-000', { force: true });
        cy.get('input[pattern="[0-9]+"]').eq(1).type('100', { force: true });
        cy.get('div.col label:contains("Endereço:") + input').type('Av. Cândido de Abreu', { force: true });
        cy.get('div.col label:contains("Complemento:") + input').type('casa', { force: true });
        cy.get('select.form-control').select('br', { force: true });
        cy.get('input[type="radio"][name="genero"][value="feminino"]').check({ force: true });
        cy.get('input[type="checkbox"][value="robot"]').check({ force: true });
        cy.get('input[type="checkbox"][value="cypress"]').check({ force: true });

        // Upload de imagem
        const imagePath = 'duck.jpg';
        cy.get('input[type="file"]').attachFile(imagePath);

        // Clica em "Salvar"
        cy.get('.btn.btn-primary.salvar').should('be.enabled').click({ force: true });

        // Validação: Verifica se o cliente aparece na lista de clientes após o cadastro
        cy.get('a.nav-link').contains('Clientes').click();
        cy.contains('td', 'Izabel Muller').should('be.visible'); // Verifica se o nome cadastrado aparece na lista
    });
});
