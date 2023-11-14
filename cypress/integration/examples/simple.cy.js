describe('Browser Actions', () => {
	it('should load books website', () => {
		cy.visit('https://books.toscrape.com/index.html')
		cy.url().should('include', 'index.html')
        cy.log('Before Reload!')
        cy.reload()
        cy.log('After Reload!')
	})
	it('should click on Horror category', () => {
		cy.get('a').contains('Horror').click()
		cy.get('h1').contains('Horror')
        cy.reload()
	})
	it('should click on Security book', () => {
		cy.get('a').contains('Security').click()
	})
	it('should check availability', () => {
		cy.get('p').contains('.instock availability').contains(
        'In stock (16 available)')
	})
})
