/// <reference types="cypress" />

describe('Test Key Presses', () => {
    beforeEach(() => {
        cy.visit('/key_presses');
    })

    it('Should tell you that you entered SPACE', () => {
        cy.get('#target').click();
        cy.realPress('Space');
        cy.get('#result').should('have.text', 'You entered: SPACE');
    })

    it('Should tell you that you entered BACKSPACE', () => {
        cy.get('#target').click();
        cy.realPress('Backspace');
        cy.get('#result').should('have.text', 'You entered: BACK_SPACE');
    })

    it('Should tell you that you entered H', () => {
        cy.get('#target').click().type('H');
        cy.get('#result').should('have.text', 'You entered: H');
    })
})