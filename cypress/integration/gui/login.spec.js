/// <reference types="Cypress" />


describe ("login", () => {
    it('Successfully', () =>{
        cy.login()

        cy.get ('.qa-user-avatar').should('exist')
    })
})