/// <reference types="cypress" />

describe('Test hovers', () => {
    beforeEach(() => {
        cy.visit('/hovers');
    })

    it('Should show additional information after hovering over the picture 1', () => {
        cy.get('.example .figure:first-of-type img').realHover({ position: "center" });
        cy.get('.example .figure:first-of-type h5').as('h5').should('be.visible');
        cy.get('@h5').should('have.text', 'name: user1');
    })
})