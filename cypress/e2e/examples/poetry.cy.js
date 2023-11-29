
describe('tests on books site', () => {
	it('go to poetry, check price of "Olio" book', () => {
		cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
		cy.get('a').contains('Poetry').click()
		// in poetry section

		cy.get('a').contains('Olio').click()
		// in book "Olio" details
		cy.get('.price_color').contains('£23.88')
	})
})
