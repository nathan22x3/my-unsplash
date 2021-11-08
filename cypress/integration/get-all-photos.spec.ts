/// <reference types="cypress" />

context('Get all pictures', () => {
  beforeEach(() => {
    cy.visit('https://my-unsplash-nathan22x3.vercel.app/');
  });

  it('should show a list of photos in masonry layout', () => {
    cy.request('GET', '/photos/all').as('getPhotos');

    cy.request('GET', 'https://my-unsplash-nathan22x3.vercel.app/').should((res) => {
      expect(res.status).to.eq(200);
    });
  });
});
