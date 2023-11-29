describe('Browser actions', () => {
	it('go to main page, then travel and count books', () => {
		cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 })
		cy.url().should('include', 'index.html')

			cy.get('a').contains('Travel').click()

			cy.get('h1').contains('Travel')
	

			cy.get('.product_pod').its('length').should('eq',11)
		})
	})
