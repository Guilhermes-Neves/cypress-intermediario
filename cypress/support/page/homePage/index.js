/// <reference types="Cypress" />

import { el } from './el'
import userMenu from '../../components/userMenu'

class HomePage {
  constructor() {
    this.userMenu = userMenu
  }

  validateLogin() {
    cy.get(el.userAvatar).should('be.visible')
  }
}

export default new HomePage()