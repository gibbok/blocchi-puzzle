describe('game', () => {
  before(() => {
    cy.visit('');
  });

  it('should show screen game', () => {
    cy.get('[data-test=screen-intro]').should('exist');
    cy.get('[data-test=button]').click();
    cy.get('[data-test=screen-game]').should('exist');
  });

  it('should show board', () => {
    cy.get('[data-test=board]').should('exist');
  });
});
