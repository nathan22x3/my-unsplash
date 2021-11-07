context('Button Add Click', () => {
    beforeEach(() => {
        cy.visit('https://my-unsplash-nathan22x3.vercel.app/')
    })

    it('Delete photo', () => {
        cy.get('.css-1uvte94').filter(':contains("programming")').as('elementDelete')
        
        cy.get('@elementDelete').find('button').click()

        cy.intercept('DELETE', '**/photos/delete/**').as('deletePhoto')
        
        cy.get('.with-inherit-shadow').last().click()

        cy.wait('@deletePhoto').its('response.statusCode').should('eq', 200)

        cy.get('.css-1uvte94')
    })
})