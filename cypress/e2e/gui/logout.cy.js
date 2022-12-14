/// <reference types="Cypress" />

import homePage from '../../support/page/homePage'

describe('logout', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })

  it('successfully', () => {
    homePage.userMenu.logout()
    cy.url().should('be.equal', Cypress.config('baseUrl') + '/users/sign_in')
  })
})