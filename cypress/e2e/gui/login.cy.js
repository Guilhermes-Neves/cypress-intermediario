/// <reference types="Cypress" />

import homePage from '../../support/page/homePage'

describe('Login', () => {
  it('successfully', () => {
    const user = Cypress.env('user_name')
    const password = Cypress.env('user_password')
    const options = { cacheSession: false }

    cy.login(user, password, options)
    homePage.validateLogin()
  })
})