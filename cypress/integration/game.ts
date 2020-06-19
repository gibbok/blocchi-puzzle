describe('game', () => {
  before(() => {
    cy.visit('');
  });

  it('should button click on intro screen and move to screen game', () => {
    cy.get('[data-test=button]').click();
  });
});
