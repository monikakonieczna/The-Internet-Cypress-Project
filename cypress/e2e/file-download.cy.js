/// <reference types="cypress" />

describe('Test file download', () => {
    beforeEach(() => {
        cy.visit('/download');
    })

    it('should download a pdf file', () => {
        cy.downloadFile('http://the-internet.herokuapp.com/download/test.txt', 'downloads', 'test.txt' )
    })

    it('Verify the downloaded file', () => {
        cy.readFile('./downloads/test.txt').should('contain', 'Wikivoyage')
        .should('exist')
      });
})