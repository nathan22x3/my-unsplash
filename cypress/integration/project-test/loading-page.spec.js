context('Loading page', () => {
  beforeEach(() => {
    cy.visit('https://my-unsplash-nathan22x3.vercel.app/')
  })

  it('Loading page', () => {
    cy.request('GET', 'https://my-unsplash-nathan22x3.vercel.app/')
    .should((res) => {
      expect(res.status).to.eq(200)
    })
  })
})