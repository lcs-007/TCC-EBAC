describe('Fluxo de checkout - AppActions', () => {

    it('Deve criar conta, adicionar produto ao carrinho e ir para checkout', () => {

        const email = `lucas${Date.now()}@teste.com`
        const senha = '123456'

        // Criar conta (já fica logado automaticamente)
        cy.acessarMinhaConta()
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get('[name="register"]').click()

        // Adiciona produto
        cy.adicionarProdutoNoCarrinho()

        // Vai para checkout
        cy.finalizarCompra()

        // Validação
        cy.url().should('include', 'checkout')
    })
})