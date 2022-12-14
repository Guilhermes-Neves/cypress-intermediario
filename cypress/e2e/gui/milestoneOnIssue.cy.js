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

  const milestone = {
    title: `milestone-${faker.random.word()}`,
  }


  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    cy.api_createIssue(issue)
      .then(response => {
        cy.api_createMilestone(response.body.project_id, milestone)
        issuePage.go(issue.project.name, response.body.iid)
      })
  })

  it('add successfully', () => {
    issuePage.setMilestone(milestone)
    issuePage.validateMilestoneAdded(milestone, issue.project)
  })
})