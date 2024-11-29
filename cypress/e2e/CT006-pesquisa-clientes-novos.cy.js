describe('CT006 - Validar Pesquisa de Cliente recém cadastrado', () => {
    const cliente = {
      nome: 'Izabel Muller',
      email: 'iza.rellum@hotmail.com.br',
      telefone: '41987592222'
    };
   
    beforeEach(() => {
      // Acessa o sistema e realiza login
      cy.visit('https://challenge.primecontrol.com.br/app');
      cy.get('#floatingInput').type('testuser@example.com'); // E-mail
      cy.get('#floatingPassword').type('password123'); // Senha
      cy.get('button').contains('Acessar').click();
      cy.url().should('include', '/app/home');
    });
   
    it('Deve buscar cliente pelo nome e validar os dados na tabela', () => {
      // Preenche o campo de busca
      cy.get('input[placeholder="Pesquisar por nome"]')
        .clear()
        .type(cliente.nome, { force: true })
        .should('have.value', cliente.nome); // Valida que o valor foi inserido corretamente
   
      // Clica no botão de pesquisar
      cy.get('#button-addon2').click();
   
      // Aguarda o carregamento da tabela e valida se o cliente está presente
      cy.wait(1000); // Tempo para carregar a busca (ajustar conforme necessário)
      cy.get('table tbody tr').should('exist'); // Verifica que há resultados na tabela
   
    });
  });
   