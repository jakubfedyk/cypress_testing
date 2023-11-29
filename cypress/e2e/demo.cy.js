/// <reference types="Cypress" />

describe('Cypress e2e Testing Demo', () => {
  beforeEach(() => {
    cy.visit('https://example.com')
  })

    afterEach(() => {
      cy.log('Running after each of my tests')
    })
  it('Assert url', () => {
    cy.url().should('contain', 'example.com')

  })

  it('Assert title', () => {
    cy.title().should('contain','Example Domain')
  })

  it('Assert element',() => {
    cy.get('h1').should('be.visible')
    cy.wait(2000)
    cy.get('p').should('be.visible')
  })

  it('Reload and Logs', () => {
    cy.log('Before Reload')
    cy.reload()
    cy.log('Afer Reload')
  })
})