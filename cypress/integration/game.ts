const findTiles = ($div: JQuery<HTMLElement>) => $div.find('[data-test-variant]');

const hasTiles = ($div: JQuery<HTMLElement>) => {
  const hasTiles = findTiles($div).is(
    (idx: number, y: HTMLElement) => y.dataset.testVariant !== '0'
  );
  expect(hasTiles).to.be.true;
};

const sel = {
  logo: '[data-test=logo]',
  button: '[data-test=button]',
  board: '[data-test=board]',
  next: '[data-test=next]',
  score: '[data-test=score]',
  level: '[data-test=level]',
  lines: '[data-test=lines]',
  padLeft: '[data-test=pad-left]',
  padRotate: '[data-test=pad-rotate]',
  padDown: '[data-test=pad-down]',
  padRight: '[data-test=pad-right]',
};

describe('game', () => {
  before(() => {
    cy.visit('');
  });

  it('should render logo', () => {
    cy.get(sel.logo).should('exist');
  });

  it('should animate logo', () => {
    cy.get(`${sel.logo} > path`).should('not.have.attr', 'style', 'fill: rgb(68, 34, 23);');
    cy.wait(4).get(`${sel.logo} > path`).should('have.attr', 'style', 'fill: rgb(68, 34, 23);');
  });

  it('should button click on intro screen and move to screen game', () => {
    cy.get(sel.button).click();
  });

  it('should display a tetro on board', () => {
    cy.get(sel.board).should('exist');
    cy.get(sel.board).find('div[data-test-variant]');
  });

  it('should display a tetro on next', () => {
    cy.get(sel.next).should('exist');
    cy.get(sel.next).find('div[data-test-variant]');
  });

  it('should display a non empty board', () => {
    cy.get(sel.board).should(hasTiles);
  });

  it('should display a non empty next', () => {
    cy.get(sel.next).should(hasTiles);
  });

  it('should display default score', () => {
    cy.get(sel.score).contains(0);
  });

  it('should display default level', () => {
    cy.get(sel.level).contains(1);
  });

  it('should display default lines', () => {
    cy.get(sel.lines).contains(0);
  });

  it('should render navigation', () => {
    cy.get(sel.padLeft).should('exist');
    cy.get(sel.padRotate).should('exist');
    cy.get(sel.padDown).should('exist');
    cy.get(sel.padRight).should('exist');
  });

  it('should click on pad-left and move tetromino', () => {
    cy.get(sel.padLeft).click();
  });
});
