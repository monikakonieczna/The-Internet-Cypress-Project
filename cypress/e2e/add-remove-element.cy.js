/// <reference types="cypress" />

describe('Test adding and removing elements', () => {
    beforeEach(() => {
        cy.visit('/add_remove_elements/');
    })

    it('should add and delete element', () => {
        cy.get('[onclick="deleteElement()"]').should('not.exist')
        cy.get('[onclick="addElement()"]').should('be.visible').click()
        cy.get('[onclick="deleteElement()"]').should('be.visible').click()
        cy.get('[onclick="deleteElement()"]').should('not.exist')

    })
})