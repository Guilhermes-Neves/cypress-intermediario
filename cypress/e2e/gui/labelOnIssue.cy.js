/// <reference types="Cypress" />

import { faker } from '@faker-js/faker'
import issuePage from '../../support/page/issuePage'

describe('Label', () => {

  const issue = {
    title: `project-${faker.datatype.uuid()}`,
    description: faker.random.words(5),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  const label = {
    name: `label-${faker.random.word()}`,
    color: '#ffaabb'
  }


  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    cy.api_createIssue(issue)
      .then(response => {
        cy.api_createLabel(response.body.project_id, label)
        issuePage.go(issue.project.name, response.body.iid)
      })
  })

  it('add successfully', () => {
    issuePage.setLabel(label)
    issuePage.validateLabelAdded(label)
  })
})