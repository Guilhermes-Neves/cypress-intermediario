/// <reference types="Cypress" />

import projectPage from "../../support/page/projectPage"
import { faker } from '@faker-js/faker'

describe('Project', () => {
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    projectPage.go()
  })

  it('created successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
    projectPage.fillForm(project)
    projectPage.submit()
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    projectPage.validateProjectCreated(project)
  })
})