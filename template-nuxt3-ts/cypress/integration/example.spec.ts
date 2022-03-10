// https://docs.cypress.io/api/introduction/api.html

describe('Home page - header', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('header', 'Description du service')
  })
})
