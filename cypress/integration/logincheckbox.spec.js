describe('Login with marked checkbox', () => {
	it('visit page zero bank', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
	})
	it('Login with invalid username', () => {
		cy.get('#user_login').clear()
		cy.get('#user_login').type('User123')
	})
	it('Type invalid password', () => {
		cy.get('#user_password').clear()
		cy.get('#user_password').type('dupa123')
	})
	it('should mark checkbox', () => {
		cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
	})
	it('should click sign up', () => {
		cy.contains('Sign in').click()
	})
	it('should check message', () => {
		cy.get('.alert-error').should('be.visible')
	})
})
