/// <reference types="Cypress" />

import { el } from './el'

class UserMenu {
  logout() {
    cy.get(el.liUserMenu).click()
    cy.get(el.signOutLink).click()
  }
}

export default new UserMenu()