/// <reference types="Cypress" />

///const faker = require('faker')

describe('create Project', () => {
    beforeEach(() => cy.login())
    it('successfully', () => {
        const project = {
            name: "gabrieltest1231",//`project-${faker.datatype.uuid()}`,
            description: "Description gabrieltest123"//faker.random.words(5)
        }

        cy.createProject(project)

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
        cy.contains(project.name).should('be.visible')
        cy.contains(project.description).should('be.visible')
    })
})

