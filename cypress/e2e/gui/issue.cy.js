/// <reference types="Cypress" />

import { faker } from '@faker-js/faker'
import issuePage from '../../support/page/issuePage'

describe('Issue', () => {

  const issue = {
    title: `project-${faker.datatype.uuid()}`,
    description: faker.random.words(5),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }


  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    cy.api_createProject(issue.project)
  })

  it('created successfully', () => {
    issuePage.go(issue.project.name, 'new')
    issuePage.fillForm(issue)
    issuePage.submit()

    issuePage.validateIssueCreated(issue)
  })
})