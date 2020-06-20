import { pipe } from 'fp-ts/lib/pipeable';

export const findTiles = (elm: JQuery<HTMLElement>): JQuery<HTMLElement> =>
  elm.find('[data-test-variant]');

export const filterTetros = (elm: JQuery<HTMLElement>): JQuery<HTMLElement> =>
  elm.filter((idx: number, y: HTMLElement) => y.dataset.testVariant !== '0');

export const findTile = (idx: number) => (elm: JQuery<HTMLElement>): HTMLElement =>
  pipe(findTiles(elm), filterTetros, (x) => x.get(idx));

export const firstTile = findTile(1);

export const lastTile = findTile(-1);

export const checkTilePosition = (
  selector: string,
  selectorPad: Sel.padLeft | Sel.padRight | Sel.padDown,
  type: 'testColumn' | 'testRow'
): Cypress.Chainable<{ posBefore: number; posAfter: number }> => {
  return cy
    .get(selector)
    .then((elm) => {
      const tile = firstTile(elm);
      const posBefore = Number(tile?.dataset?.[type]);
      return Promise.resolve(posBefore);
    })
    .then((posBefore) => {
      return cy
        .get(selectorPad)
        .click()
        .then(() => {
          return cy.get(selector).then((elm) => {
            const tile = firstTile(elm);
            const posAfter = Number(tile?.dataset?.[type]);
            return Promise.resolve({
              posBefore,
              posAfter,
            });
          });
        });
    });
};

export const enum Sel {
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
