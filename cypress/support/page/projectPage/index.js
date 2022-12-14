/// <reference types="Cypress" />

import { el } from './el'

class ProjectPage {
  constructor() {

  }

  go() {
    cy.visit('/projects/new')
  }

  fillForm(project) {
    cy.get(el.inputProjectName).type(project.name)
    cy.get(el.textAreaDescription).type(project.description)
  }

  submit() {
    cy.contains(el.inputCreateProject).click()
  }

  validateProjectCreated(project) {
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  }
}

export default new ProjectPage()