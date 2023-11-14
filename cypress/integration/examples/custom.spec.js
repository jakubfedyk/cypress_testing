describe('Custom Commands', () => {
    it('should login to application with custom command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
    })
})