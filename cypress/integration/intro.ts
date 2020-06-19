describe('intro', () => {
  before(() => {
    cy.visit('');
  });

  it('should show screen intro', () => {
    cy.get('[data-test=screen-intro]').should('exist');
  });

  it('should show the logo', () => {
    cy.get('[data-test=logo]').should('exist');
  });

  it('should show the button', () => {
    cy.get('[data-test=logo]').should('exist');
  });

  it('should show text `Play!` in the button', () => {
    cy.get('[data-test=button]').contains('Play!');
  });

  it('should button click and move screen game', () => {
    cy.get('[data-test=button]').click();
    cy.get('[data-test=screen-game]').should('exist');
  });
});
