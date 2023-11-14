describe('Login with marked checkbox', () => {
	it('should override the current time',() => {
		const date = new Date(2020, 3, 10).getTime() // return a timestamp
		cy.clock(date)
		cy.log(date)
	})
	
	it('visit page zero bank', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.clearCookies({ log: true })
		cy.clearLocalStorage('your item', { log: true})
		cy.title().should('include', 'Zero - Log in')
	})
	it('Login with invalid username', () => {
		cy.get('#user_login').as('username')
		cy.get('@username').clear()
		cy.get('@username').type('User123')
	})
	it('Type invalid password', () => {
		cy.get('#user_password').as('password')
		cy.get('@password').clear()
		cy.get('@password').type('dupa123')
	})
	it('should mark checkbox', () => {
		cy.get('input[type="checkbox"]').click()
        cy.wait(5000)
	})
	it('should click sign up', () => {
		cy.contains('Sign in').click()
	})
	it('should check message', () => {
		cy.get('.alert-error')
		.should('be.visible')
		.and('contain', 'Login and/or password are wrong.')
	})
})
