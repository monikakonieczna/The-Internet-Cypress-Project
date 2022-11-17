/// <reference types="cypress" />

describe('Test the login page', () => {
    beforeEach(() => {
        cy.visit('/login');
    })

    it('Login with correct credentials.', () => {
        cy.fixture('cre').then((cre) => {
            cy.get('#username').clear().type(cre.login);
            cy.get('#password').clear().type(cre.password);
        });
        cy.get('[type="submit"]').click();
        cy.url().should('include', 'secure');
        cy.get('#flash').should('have.class', 'flash success');
        cy.get('h2').should('include.text', ' Secure Area');
    })

    it('Login with incorrect credentials. Should show error message.', () => {
        cy.fixture('wrongcre').then((cre) => {
            cy.get('#username').clear().type(cre.login, { log: false });
            cy.get('#password').clear().type(cre.password, { log: false });
        });

        cy.get('[type="submit"]').click();
        cy.url().should('not.include', 'secure');
        cy.get('#flash').should('have.class', 'flash error');
        cy.get('h2').should('include.text', 'Login Page');
    })
})