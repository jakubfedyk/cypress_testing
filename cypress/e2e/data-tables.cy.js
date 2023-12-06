/// <reference types="Cypress" />


describe('Data Tables', () => {
  it('Validate items inside data table', () => {
    cy.visit('https://practice-automation.com/tables/')
    cy.get('.wp-block-table').within(()=> {
      cy.get('td').eq(0).should('contain', 'Item')
      cy.get('td').eq(1).should('contain', 'Price')

    })
  })
})