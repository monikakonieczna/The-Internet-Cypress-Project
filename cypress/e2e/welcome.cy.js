/// <reference types="cypress" />

describe('Test the Internet Welcome Page', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should have correct headers', () => {
        cy.get('h1').should('be.visible').and('have.text', 'Welcome to the-internet');
        cy.get('h2').should('be.visible').and('have.text', 'Available Examples');
    })
})