    describe('Login flow', () => {
    it('should log in a user and visit the protected route', () => {
        cy.visit('/')

        cy.get('[data-testid="login-link"]').click()

        cy.get('[data-testid="login-username"]').type('John Doe')
        cy.get('[data-testid="login-submit"]').click()

        cy.get('[data-testid="profile-link"]').click()
        
        cy.get('[data-testid="welcome-user"]').should('contain.text', 'Welcome, John Doe')
    })
})