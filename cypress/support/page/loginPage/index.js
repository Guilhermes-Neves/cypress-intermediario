/// <reference types="Cypress" />

import { el } from './el'

class LoginPage {
  constructor() {

  }

  go() {
    cy.visit('/')
  }

  fillForm(user, pass) {
    cy.get(el.inputUserName).type(user)
    cy.get(el.inputPassWord).type(pass, { log: false })
  }

  submit() {
    cy.get(el.signInButton).click()
  }
}

export default new LoginPage()