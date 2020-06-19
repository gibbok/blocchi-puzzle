const hasTiles = ($div: JQuery<HTMLElement>) => {
  const tilesHtml = $div.find('[data-test-variant]');
  const hasTiles = tilesHtml.is((idx: number, y: HTMLElement) => y.dataset.testVariant !== '0');
  expect(hasTiles).to.be.true;
};

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

  it('should display a non empty board', () => {
    cy.get('[data-test=board]').should(hasTiles);
  });

  it('should display a non empty next', () => {
    cy.get('[data-test=next]').should(hasTiles);
  });

  it('should display default score', () => {
    cy.get('[data-test=score]').contains(0);
  });

  it('should display default level', () => {
    cy.get('[data-test=level]').contains(1);
  });

  it('should display default lines', () => {
    cy.get('[data-test=lines]').contains(0);
  });
});
