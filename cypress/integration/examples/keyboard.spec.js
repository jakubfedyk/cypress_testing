describe('Keyboard press simulation', () => {
    it('should submit searchbox with pressing enter', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('anything {a}{b}{c} {enter}')
    })
})