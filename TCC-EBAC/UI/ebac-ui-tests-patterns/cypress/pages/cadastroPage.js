class CadastroPage {

    visitarMinhaConta() {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    }

    preencherEmail(email) {
        cy.get('#reg_email').type(email)
    }

    preencherSenha(senha) {
        cy.get('#reg_password').type(senha)
    }

    clicarRegistrar() {
        cy.get('[name="register"]').click()
    }

    registrarNovoUsuario(email, senha) {
        this.preencherEmail(email)
        this.preencherSenha(senha)
        this.clicarRegistrar()
    }
}

export default new CadastroPage()