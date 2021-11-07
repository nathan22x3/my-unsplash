context('Button Add Click', () => {
    beforeEach(() => {
        cy.visit('https://my-unsplash-nathan22x3.vercel.app/')
    })

    it('Insert data to input', () => {
        cy.get('button').should('have.text', 'Add a photo')
        .click()
        .get('#label').type('programming').should('have.value', 'programming')
        .get('#url').type('https://images2.alphacoders.com/485/thumbbig-485508.jpg').should('have.value', 'https://images2.alphacoders.com/485/thumbbig-485508.jpg')

        .get('.with-inherit-shadow').last().click()
    })
})