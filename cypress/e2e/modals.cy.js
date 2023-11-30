/// <reference types="Cypress" />

describe('Cypress modals', () => {
  it('Open and Assert modal', () => {
    cy.visit('https://practice-automation.com/modals/')
    cy.get('.entry-content').should('be.visible')
    cy.get('#simpleModal').click()
    cy.get('.pum-title').should('be.visible')
    cy.get('p').contains("Hi, I’m a simple modal.").should('be.visible')
    cy.get('button[class="pum-close popmake-close"]').last().click()
    cy.screenshot()
  })
})