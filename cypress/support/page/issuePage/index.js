/// <reference types="Cypress" />

import { el } from './el'

class IssuePage {
  constructor() {

  }

  go(projectName, issue) {
    cy.visit(`/${Cypress.env('user_name')}/${projectName}/issues/${issue}`)
  }

  fillForm(issue) {
    cy.get(el.inputTitle).type(issue.title)
    cy.get(el.textAreaDescription).type(issue.description)
  }

  submit() {
    cy.contains(el.inputSubmit).click()
  }

  validateIssueCreated(issue) {
    cy.get(el.issueDetails)
      .should('contain', issue.title)
      .should('contain', issue.description)

  }

  setLabel(label) {
    cy.get(el.buttonEditLabels).click()
    cy.contains(el.linkLabel, label.name).click()
    cy.get(el.buttonEditLabels).click()
  }

  setMilestone(milestone) {
    cy.get(el.buttonEditMilestone).click()
    cy.contains(el.linkMilestone, milestone.title).click()
  }

  validateLabelAdded(label) {
    cy.contains(el.spanLabelAdded, label.name)
      .should('be.visible')
      .should('have.attr', 'style', `background-color: ${label.color}; color: #333333;`)
  }

  validateMilestoneAdded(milestone, project) {
    cy.scrollTo('top')
    cy.contains(el.linkMilestone, milestone.title)
      .should('have.attr', 'href', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}/-/milestones/1`)
  }
}

export default new IssuePage()