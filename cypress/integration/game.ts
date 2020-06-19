describe('game', () => {
  before(() => {
    cy.visit('');
  });

  it('should button click on intro screen and move to screen game', () => {
    cy.get('[data-test=button]').click();
  });

  it('should display a tetro on board', () => {
    cy.get('[data-test=board]').should('exist');
    cy.get('[data-test=board]').find('div[data-test-variant]');
  });

  it('should display a tetro on next', () => {
    cy.get('[data-test=next]').should('exist');
    cy.get('[data-test=next]').find('div[data-test-variant]');
  });
});
