/// <reference types="cypress" />

context('Add new photo', () => {
  beforeEach(() => {
    cy.visit('https://my-unsplash-nathan22x3.vercel.app/');
  });

  it('should open a add new photo form when click Add Photo Button', () => {
    cy.get('button')
      .should('have.text', 'Add a photo')
      .click()
      .get('h2')
      .should('have.text', 'Add a new photo');
  });

  it('should add a new photo and show it on top of the list', () => {
    cy.get('button')
      .should('have.text', 'Add a photo')
      .click()
      .get('#label')
      .type('programming')
      .get('#url')
      .type('https://images2.alphacoders.com/485/thumbbig-485508.jpg');

    cy.intercept('POST', '**/photos/add').as('postNewPhoto');

    cy.get('.with-inherit-shadow').last().click();

    cy.wait('@postNewPhoto').its('response.statusCode').should('eq', 201);
  });

  it('should not add a new photo with unsuitable input value', () => {
    cy.get('button')
      .should('have.text', 'Add a photo')
      .click()
      .get('#label')
      .type('test')
      .get('#url')
      .type('https://images2.alphacoders.com/485/thumbbig-485508');

    cy.intercept('POST', '**/photos/add').as('postNewPhoto');

    cy.get('.with-inherit-shadow').last().click();

    cy.wait('@postNewPhoto').its('response.statusCode').should('eq', 400);
  });
});
