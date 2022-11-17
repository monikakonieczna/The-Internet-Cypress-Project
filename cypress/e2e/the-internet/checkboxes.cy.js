/// <reference types="cypress" />

describe('Test checkboxes', () => {
    beforeEach(() => {
        cy.visit('/checkboxes');
    })

    it('should select first checkbox', () => {
        cy.get('[type="checkbox"]:first-of-type').as('checkbox1').should('not.be.checked');
        cy.get('@checkbox1').check().should('be.checked');

    })

    it('should select last checkbox', () => {
        cy.get('[type="checkbox"]:last-of-type').as('checkbox2').should('not.be.checked').check();
        cy.get('@checkbox2').check().should('be.checked');
    })

})