/// <reference types="Cypress" />


describe('Cypress file upload', () => {
  it('Should upload JSON example file', () => {
    cy.visit('https://the-internet.herokuapp.com/upload')
    cy.get('#file-upload').selectFile('cypress/fixtures/example.json')
    cy.get('#file-submit').click()
    cy.get('h3').should('be.visible')
  })
})