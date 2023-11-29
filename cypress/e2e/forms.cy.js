/// <reference types="Cypress" />

describe('Forms, Buttons & Checkbox', () => {
	it('Submit and Assert form', () => {
		//Varables with Data
		const name = 'Peter'
		const drink = 'Water'
		const color = 'Yellow'
		const email = 'test@o2.com'
		const message = 'Hello world'
		//Load the form
		cy.visit('https://practice-automation.com/form-fields/')
		cy.get('[data-test="contact-form"]').should('be.visible')
		//Fill the form
		cy.get('#g1103-name').type(name)
		cy.contains(drink).click()
		cy.contains(color).click()
		cy.get('#g1103-doyouhaveanysiblings-button').click().get('#ui-id-2').click()
		cy.get('#email').type(email)
		cy.get('#contact-form-comment-message').type(message)
		cy.contains('Submit').click()

		//Assert Form details
		cy.get('.contact-form-submission').should('be.visible')
		cy.get('.field-value').contains(name).should('be.visible')
		cy.get('.field-value').contains(drink).should('be.visible')
		cy.get('.field-value').contains(color).should('be.visible')
		cy.get('.field-value').contains('Yes').should('be.visible')
		cy.get('.field-value').contains(email).should('be.visible')
		cy.get('.field-value').contains(message).should('be.visible')
	})
})
