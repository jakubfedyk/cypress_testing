/// <reference types="Cypress" />

describe('Forms, Buttons & Checkbox', () => {
	it('Submit and Assert form', () => {
		//Varables with Data
		const name = 'Peter'
		const drink = 'Water'
		const color = 'Yellow'
		const siblings = 'Yes'
		const email = 'test@o2.com'
		const message = 'Hello world'
		//Load the form
		cy.visit('https://practice-automation.com/form-fields/')
		cy.getByTestData('contact-form').should('be.visible')
		//Fill the form
		cy.getById('g1103-name').type(name)
		cy.contains(drink).click()
		cy.contains(color).click()
		cy.getById('g1103-doyouhaveanysiblings-button')
			.click()
			.getById('ui-id-3')
			.click()
		cy.getById('email').type(email)
		cy.getById('contact-form-comment-message').type(message)
		cy.contains('Submit').click()

		//Assert Form details
		cy.getByClass('contact-form-submission').should('be.visible')
		cy.getByClass('field-value').contains(name).should('be.visible')
		cy.getByClass('field-value').contains(drink).should('be.visible')
		cy.getByClass('field-value').contains(color).should('be.visible')
		cy.getByClass('field-value').contains(siblings).should('be.visible')
		cy.getByClass('field-value').contains(email).should('be.visible')
		cy.getByClass('field-value').contains(message).should('be.visible')
	})
})
