/// <reference types="cypress" />

describe('Test access to shadow DOM', () => {
    beforeEach(() => {
        cy.visit('/shadowdom');
    })

    it('verifies text in span element', () => {
        cy.get('span[slot="my-text"]', { includeShadowDom: true }).should('have.text', "Let's have some different text!");
    })
    it('verifies text in ul element', () => {
        cy.get('ul[slot="my-text"] li:nth-child(2)', { includeShadowDom: true }).should('have.text', "In a list!");
    })
})