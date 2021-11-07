context('Get all pictures', () => {
    beforeEach(() => {
        cy.visit('https://my-unsplash-nathan22x3.vercel.app/')
    })

    it('Get picture elements', () => {
        // Alias the route to wait for its response
        // cy.intercept('GET', '/photos/**').as('getPhotos')

        cy.request('GET', '/photos/all').as('getPhotos')

        // https://on.cypress.io/wait
        // cy.wait('@getPhotos').its('response.statusCode').should('eq', 200)
        cy.get('@getPhotos').should((response) => {
            expect(response.status).to.eq(200)
        })
      })
})