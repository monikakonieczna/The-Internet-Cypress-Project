/// <reference types="cypress" />

describe('Test an alert and text displaying', () =>  {
    it('Verifies alert and its text content', () => {
        cy.visit('/context_menu')
        
        const alertShown = cy.stub().as("alertShown")
        cy.on ('window:alert', alertShown)
        cy.get('#hot-spot').rightclick()
        cy.get("@alertShown").should("have.been.calledOnceWith", "You selected a context menu")
    })
})