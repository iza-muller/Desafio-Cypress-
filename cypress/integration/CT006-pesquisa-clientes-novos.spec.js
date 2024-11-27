describe('CT006 - Validar Pesquisa de Cliente recém cadastrado e exibição dos dados em tela', () => {
    const cliente = {
        nome: 'Izabel Muller',
        telefone: '41987592222',
        email: 'iza.rellum@hotmail.com.br',
        endereco: 'Av. Cândido de Abreu'
    };

    beforeEach(() => {
        // Passo 1: Acessar a aplicação e fazer login
        cy.visit('https://challenge.primecontrol.com.br/app');
        cy.get('#floatingInput').type('testuser@example.com'); // E-mail válido
        cy.get('#floatingPassword').type('password123'); // Senha válida
        cy.get('button[type="button"]').contains('Acessar').click();

        // Passo 2: Verificar se o login foi bem-sucedido
        cy.url().should('include', '/app/home');
    });

    it('Deve pesquisar cliente pelo Nome e validar os dados', () => {
        realizarPesquisaEValidar(cliente.nome, cliente);
    });

    it('Deve pesquisar cliente pelo Telefone e validar os dados', () => {
        realizarPesquisaEValidar(cliente.telefone, cliente);
    });

    it('Deve pesquisar cliente pelo E-mail e validar os dados', () => {
        realizarPesquisaEValidar(cliente.email, cliente);
    });

    // Função reutilizável para pesquisa e validação
    function realizarPesquisaEValidar(termoPesquisa, cliente) {
        // Passo 3: Localizar a barra de pesquisa de cliente
        cy.get('input.form-control.inputSearch[placeholder="Pesquisar por nome"]')
            .should('be.visible')
            .clear()
            .type(termoPesquisa, { force: true });

        // Passo 4: Clicar no botão "Pesquisar"
        cy.get('button[aria-describedby="button-addon2"]').click();

        // Passo 5: Validar se os dados do cliente aparecem na tabela ou na tela
        cy.get('table tbody tr').should('have.length.at.least', 1); // Garantir que pelo menos um resultado existe

        cy.get('table tbody tr').within(() => {
            // Verificar o nome
            cy.get('td').eq(0).should('contain', cliente.nome); // Nome
            // Verificar o telefone
            cy.get('td').eq(1).should('contain', cliente.telefone); // Telefone
            // Verificar o e-mail
            cy.get('td').eq(2).should('contain', cliente.email); // E-mail
            // Verificar o endereço
            cy.get('td').eq(3).should('contain', cliente.endereco); // Endereço
        });

        // Passo 6: Validar se existe um botão ou link para editar ou visualizar mais detalhes do cliente
        cy.get('table tbody tr td button').contains('Editar').should('be.visible');
        cy.get('table tbody tr td button').contains('Detalhes').should('be.visible');
    }
});
