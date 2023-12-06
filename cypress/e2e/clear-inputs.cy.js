/// <reference types="Cypress" />


describe('Cypress Clearing Inputs', () => {
  it('Type and clear', () => {
    cy.visit('https://practice-automation.com/form-fields/')
    cy.get('#g1103-name').clear()
    cy.get('#g1103-name').type('Peter').wait(2000)
    cy.get('#g1103-name').clear()
  })
})