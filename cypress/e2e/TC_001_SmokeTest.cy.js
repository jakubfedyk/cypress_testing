/// <reference types="Cypress" />


describe('TC_001_Smoke_Test', () => {
  it('Should load homepage', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('.navbar-brand').should('be.visible')
    cy.get('#navbarExample').should('be.visible')
    cy.get('#cat').should('be.visible')
    cy.get('#fotcont').should('be.visible')
  })
})