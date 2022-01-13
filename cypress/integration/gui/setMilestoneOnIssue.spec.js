/// <reference types="Cypress" />

const faker = require('faker')


describe('Set milestone on issue', () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project: {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
    }
    const milestone = {
        title: `milestone-${faker.random.word()}`
    }
    beforeEach(() => {
        cy.login()
        cy.api_createIssue(issue)
        cy.visit(`${Cypress.env('user_name')}/${issue.project.name}/-/milestones/new`)    
    })
    it('Successfully', () => {
        cy.gui_setMilestoneOnIssue(milestone)

//        cy.get('qa-milestone-title').type(milestone.title)
        cy.get('.milestone-detail').should('contain', milestone.title)


    })

})