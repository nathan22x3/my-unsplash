context('Button Add Click', () => {
    beforeEach(() => {
        cy.visit('https://my-unsplash-nathan22x3.vercel.app/')
    })

    it('Button click', () => {
        cy.get('button').should('have.text', 'Add a photo')
        .click()
        .get('h2').should('have.text', 'Add a new photo')
    })
})