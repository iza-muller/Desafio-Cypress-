describe('CT007 - Editar Cliente através do botão na listagem de clientes', () => {
    it('Deve editar o telefone de um cliente e salvar as alterações', () => {
        // Passo 1: Fazer login com sucesso usando as credenciais fornecidas
        cy.visit('https://challenge.primecontrol.com.br/app');
        
        // Passo 2: Preencher o campo de login (email e senha)
        cy.get('#floatingInput').type('testuser@example.com'); // E-mail válido
        cy.get('#floatingPassword').type('password123'); // Senha válida
        cy.get('button[type="button"]').contains('Acessar').click();

        // Passo 3: Esperar a página de home carregar e verificar se a URL é correta
        cy.url().should('include', '/app/home');
        
        // Passo 4: Navegar até a listagem de clientes
        cy.get('a.nav-link').contains('Clientes').click(); // Ajuste para a navegação correta

        // Passo 5: Esperar a listagem de clientes carregar
        cy.get('table tbody tr').should('have.length.greaterThan', 0); // Garantir que há pelo menos um cliente na lista
        
        // Passo 6: Encontrar e clicar no botão de edição do cliente
        cy.get('a[href^="/app/editarcliente"]').first().click(); // Clicar no primeiro botão de edição
        
        // Passo 7: Editar o telefone do cliente (apenas o telefone)
        cy.get('input[type="text"]').eq(1).clear().type('41987654321'); // Novo telefone
        
        // Passo 8: Clicar no botão "Salvar" para confirmar as alterações
        cy.get('.btn.btn-primary.btn-acao').click({ force: true });

        // Passo 9: Verificar se as alterações foram salvas corretamente
        // Esperar a página de listagem de clientes carregar novamente
        cy.url().should('include', '/app/home');
        
        // Passo 10: Validar se o telefone atualizado aparece na listagem
        cy.get('table tbody tr').contains('41987654321').should('exist'); // Verificar se o novo telefone aparece na lista
    });
});
