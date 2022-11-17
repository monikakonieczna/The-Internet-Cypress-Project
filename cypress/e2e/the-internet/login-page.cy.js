/// <reference types="cypress" />

describe('Test the login page', () => {
    beforeEach(() => {
        cy.visit('/login');
    })

    it('Login with correct credentials.', () => {
        cy.get('#username').type(JSON.stringify(Cypress.env('login'), {log: false}))
        cy.get('#password').type(Cypress.env('password'), {log: false})
        cy.get('[type="submit"]').click()
    })

    it('Login with incorrect credentials. Should show error message.', () => {
        
    })
})