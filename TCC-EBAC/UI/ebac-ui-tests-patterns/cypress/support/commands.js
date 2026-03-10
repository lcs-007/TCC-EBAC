// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('acessarMinhaConta', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
})

Cypress.Commands.add('login', (email, senha) => {
    cy.get('#username').type(email)
    cy.get('#password').type(senha)
    cy.get('[name="login"]').click()
})

Cypress.Commands.add('adicionarProdutoNoCarrinho', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/product/augusta-pullover-jacket/')

    // Seleciona tamanho
    cy.get('.button-variable-item-M').click()

    // Seleciona cor
    cy.get('.button-variable-item-Blue').click()

    // Adiciona ao carrinho
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('finalizarCompra', () => {
    cy.get('.woocommerce-message a').click()
    cy.get('.checkout-button').click()
})