/// <reference types="Cypress" />

import ExamplePage from "../pages/ExamplePage"

describe('Cypress e2e Testing Demo', () => {
  beforeEach(() => {
   // cy.visit('https://example.com')
   const examplePage = new ExamplePage()
   examplePage.openExamplePage()

  })

    afterEach(() => {
      cy.log('Running after each of my tests')
    })
  it('Assert url and title', () => {
    const examplePage = new ExamplePage()
    examplePage.assertUrl()
    examplePage.assertTitle()

  })


  it('Assert element',{ retries:3 },() => {
    //const examplePage = new ExamplePage()
   // examplePage.assertH1Element()
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