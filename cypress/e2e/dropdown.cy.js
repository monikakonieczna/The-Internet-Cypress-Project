describe('Test chioce from a dropdwon list', () => {
    beforeEach(() => {
        cy.visit('/dropdown');
    })

    it('should choose option 1', () => {
        cy.get('select').select('Option 1').should('have.value', '1')
        
    })

    it('should choose option 2', () => {
        cy.get('select').select('Option 2').should('have.value', '2')
        
    })
})