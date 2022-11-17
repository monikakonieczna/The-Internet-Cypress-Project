/// <reference types="cypress" />

describe('Test images', () => {
    beforeEach(() => {
        cy.visit('/broken_images');
    })

    it('should check if "Fork me on github" image is not broken', () => {
        cy.get('a img:first-of-type') .should('be.visible')
        .and($img => expect($img[0].naturalWidth).to.be.gt(0))
    })

    it('should check if "first example" image is not broken', () => {
        cy.get('.example  img:first-of-type') .should('be.visible')
        .and($img => expect($img[0].naturalWidth).to.be.gt(0))
    })

    it('should check if "second example" image is not broken', () => {
        cy.get('.example  img:nth-of-type(2)') .should('be.visible')
        .and($img => expect($img[0].naturalWidth).to.be.gt(0))
    })

    it('should check if "last example" image is not broken', () => {
        cy.get('.example  img:last-of-type') .should('be.visible')
        .and($img => expect($img[0].naturalWidth).to.be.gt(0))
    })
})