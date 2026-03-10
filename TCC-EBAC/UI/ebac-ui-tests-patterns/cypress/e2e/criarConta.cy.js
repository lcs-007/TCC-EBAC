import cadastroPage from '../pages/cadastroPage'

describe('Fluxo de criação de conta - Page Objects', () => {

    it('Deve criar uma nova conta com sucesso', () => {

        const email = `lucas${Date.now()}@teste.com`
        const senha = '123456'

        cadastroPage.visitarMinhaConta()
        cadastroPage.registrarNovoUsuario(email, senha)

        cy.get('.woocommerce-MyAccount-content')
            .should('contain', 'Olá')
    })
})