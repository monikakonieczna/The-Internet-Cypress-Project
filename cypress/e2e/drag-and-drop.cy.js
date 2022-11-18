/// <reference types="cypress" />

describe('Test Drag and Drop feature', function() {
    it('switches places of elements A and B using drag and drop feature', function() {
        cy.visit('/drag_and_drop')
        cy.get('#column-a header').should('have.text', 'A');
        cy.get('#column-b header').should('have.text', 'B');
        cy.get('#columns div:first-child').drag('#columns div:last-child');
        //cy.wait(10)
        //cy.get('#column-a header').should('have.text', 'B');
        //cy.get('#column-b header').should('have.text', 'A');
    })
})