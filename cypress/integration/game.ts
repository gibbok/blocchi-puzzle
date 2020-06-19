const findTiles = (elm: JQuery<HTMLElement>) => elm.find('[data-test-variant]');

const findFirstTile = (elm: JQuery<HTMLElement>) =>
  findTiles(elm)
    .filter((idx: number, y: HTMLElement) => y.dataset.testVariant !== '0')
    .get(0);

const hasTiles = (elm: JQuery<HTMLElement>) => {
  const hasTiles = findTiles(elm).is(
    (idx: number, y: HTMLElement) => y.dataset.testVariant !== '0'
  );
  expect(hasTiles).to.be.true;
};

const checkTilePosition = (
  selector: string,
  selectorPad: Sel.padLeft | Sel.padRight,
  type: 'testColumn' | 'testRow'
) => {
  return cy
    .get(selector)
    .then((elm) => {
      const tile = findFirstTile(elm);
      const posBefore = Number(tile?.dataset?.[type]);
      return Promise.resolve(posBefore);
    })
    .then((beforeColumn) => {
      return cy
        .get(selectorPad)
        .click()
        .then(() => {
          return cy.get(selector).then((elm) => {
            const tile = findFirstTile(elm);
            const posAfter = Number(tile?.dataset?.[type]);
            return Promise.resolve({
              before: beforeColumn,
              after: posAfter,
            });
          });
        });
    });
};

const enum Sel {
  logo = '[data-test=logo]',
  button = '[data-test=button]',
  board = '[data-test=board]',
  next = '[data-test=next]',
  score = '[data-test=score]',
  level = '[data-test=level]',
  lines = '[data-test=lines]',
  padLeft = '[data-test=pad-left]',
  padRotate = '[data-test=pad-rotate]',
  padDown = '[data-test=pad-down]',
  padRight = '[data-test=pad-right]',
}

describe('game', () => {
  before(() => {
    cy.visit('');
  });

  it('should render logo', () => {
    cy.get(Sel.logo).should('exist');
  });

  it('should animate logo', () => {
    cy.get(`${Sel.logo} > path`).should('not.have.attr', 'style', 'fill: rgb(68, 34, 23);');
    cy.wait(4).get(`${Sel.logo} > path`).should('have.attr', 'style', 'fill: rgb(68, 34, 23);');
  });

  it('should button click on intro screen and move to screen game', () => {
    cy.get(Sel.button).click();
  });

  it('should display a tetro on board', () => {
    cy.get(Sel.board).should('exist');
    cy.get(Sel.board).find('div[data-test-variant]');
  });

  it('should display a tetro on next', () => {
    cy.get(Sel.next).should('exist');
    cy.get(Sel.next).find('div[data-test-variant]');
  });

  it('should display a non empty board', () => {
    cy.get(Sel.board).should(hasTiles);
  });

  it('should display a non empty next', () => {
    cy.get(Sel.next).should(hasTiles);
  });

  it('should display default score', () => {
    cy.get(Sel.score).contains(0);
  });

  it('should display default level', () => {
    cy.get(Sel.level).contains(1);
  });

  it('should display default lines', () => {
    cy.get(Sel.lines).contains(0);
  });

  it('should render navigation', () => {
    cy.get(Sel.padLeft).should('exist');
    cy.get(Sel.padRotate).should('exist');
    cy.get(Sel.padDown).should('exist');
    cy.get(Sel.padRight).should('exist');
  });

  it('should click on pad-left and move tetromino', () => {
    checkTilePosition(Sel.board, Sel.padLeft, 'testColumn').then((x) => {
      expect(x.before - 1).equal(x.after);
    });
  });

  it('should click on pad-right and move tetromino', () => {
    checkTilePosition(Sel.board, Sel.padRight, 'testColumn').then((x) => {
      expect(x.before + 1).equal(x.after);
    });
  });
});
