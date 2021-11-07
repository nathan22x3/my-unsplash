context('Button Add Click', () => {
    beforeEach(() => {
        cy.visit('https://my-unsplash-nathan22x3.vercel.app/')
    })

    it('Post new photo', () => {

        cy.get('button').should('have.text', 'Add a photo')
        .click()
        .get('#label').type('programming')
        .get('#url').type('https://images2.alphacoders.com/485/thumbbig-485508.jpg')

        cy.intercept('POST', '**/photos/add').as('postNewPhoto')
        
        cy.get('.with-inherit-shadow').last().click()

        cy.wait('@postNewPhoto').its('response.statusCode').should('eq', 201)
    })
})