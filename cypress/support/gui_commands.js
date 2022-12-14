import loginPage from './page/loginPage'
import projectPage from './page/projectPage'

Cypress.Commands.add('login', (
  user = Cypress.env('user_name'),
  pass = Cypress.env('user_password'),
  { cacheSession = true } = {}
) => {
  const login = () => {
    loginPage.go()
    loginPage.fillForm(user, pass)
    loginPage.submit()
  }

  const validate = () => {
    cy.visit('/')
    cy.location('pathname', { timeout: 1000 })
      .should('not.eq', '/users/sign_in')
  }

  const options = {
    cacheAcrossSpecs: true,
    validate
  }

  if (cacheSession) {
    cy.session(user, login, options)
  } else {
    login()
  }
})

Cypress.Commands.add('createProject', (project) => {
  projectPage.go()
  projectPage.fillForm(project)
  projectPage.submit()
})