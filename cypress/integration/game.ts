import {
  Sel,
  checkTilePosition,
  findTiles,
  firstTile,
  getDataset,
  lastTile,
  findTile,
  filterTetros,
  getDataTiles,
} from '../util';
import { pipe } from 'fp-ts/lib/pipeable';
import { toArray } from 'cypress/types/lodash';

const hasTiles = (elm: JQuery<HTMLElement>): void => {
  const hasTiles = findTiles(elm).is(
    (idx: number, y: HTMLElement) => y.dataset.testVariant !== '0'
  );
  expect(hasTiles).to.be.true;
};

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
    cy.get(Sel.board)
      .then((boardElm) => {
        const beforeData = getDataTiles(boardElm);
        return Promise.resolve(beforeData);
      })
      .then((beforeData) => {
        cy.get(Sel.padRotate)
          .click()
          .then(() => {
            cy.get(Sel.board).then((boardElm) => {
              const afterData = getDataTiles(boardElm);
              expect(afterData).not.equal(beforeData);
            });
          });
      });
  });
});
