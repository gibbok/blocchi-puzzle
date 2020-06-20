import { Sel, checkTilePosition, hasTiles, getDataFromContainer } from '../util';

describe('game', () => {
  before(() => {
    cy.visit('');
  });

  it('should render screen intro', () => {
    cy.get(Sel.screenIntro).should('exist');
  });

  it('should render logo', () => {
    cy.get(Sel.logo).should('exist');
  });

  it('should animate logo', () => {
    cy.get(`${Sel.logo} > path`)
      .then((elm) => {
        const before = elm.attr('stroke-dashoffset');
        return Promise.resolve(before);
      })
      .then((before) => {
        cy.wait(0.1)
          .get(`${Sel.logo} > path`)
          .then((elm) => {
            const after = elm.attr('stroke-dashoffset');
            return Promise.resolve(after);
          })
          .then((after) => {
            expect(after).not.equal(before);
          });
      });
  });

  it('should button click on screen into and move to screen game', () => {
    cy.get(Sel.button).click();
    cy.get(Sel.screenGame).should('exist');
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
      expect(x.posBefore - 1).equal(x.posAfter);
    });
  });

  it('should click on pad-right and move tetromino', () => {
    checkTilePosition(Sel.board, Sel.padRight, 'testColumn').then((x) => {
      expect(x.posBefore + 1).equal(x.posAfter);
    });
  });

  it('should click on pad-down and move tetromino', () => {
    checkTilePosition(Sel.board, Sel.padDown, 'testRow').then((x) => {
      expect(x.posBefore + 1).equal(x.posAfter);
    });
  });

  it('should click on pad-up and rotate tetromino', () => {
    getDataFromContainer(Sel.board).then((beforeData) => {
      cy.get(Sel.padRotate)
        .click()
        .then(() => {
          getDataFromContainer(Sel.board).then((afterData) => {
            expect(afterData).not.equal(beforeData);
          });
        });
    });
  });

  it('should navigate using arrow key', () => {
    getDataFromContainer(Sel.board).then((beforeData) => {
      cy.get(Sel.padRotate)
        .trigger('keydown', { code: 'ArrowUp', bubble: true, force: true, log: true })
        .then(() => {
          getDataFromContainer(Sel.board).then((afterData) => {
            expect(afterData).not.equal(beforeData);
          });
        });
    });
  });
});
