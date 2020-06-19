export const findTiles = (elm: JQuery<HTMLElement>): JQuery<HTMLElement> =>
  elm.find('[data-test-variant]');

export const findFirstTile = (elm: JQuery<HTMLElement>): HTMLElement =>
  findTiles(elm)
    .filter((idx: number, y: HTMLElement) => y.dataset.testVariant !== '0')
    .get(0);

export const checkTilePosition = (
  selector: string,
  selectorPad: Sel.padLeft | Sel.padRight | Sel.padDown,
  type: 'testColumn' | 'testRow'
): Cypress.Chainable<{ posBefore: number; posAfter: number }> => {
  return cy
    .get(selector)
    .then((elm) => {
      const tile = findFirstTile(elm);
      const posBefore = Number(tile?.dataset?.[type]);
      return Promise.resolve(posBefore);
    })
    .then((posBefore) => {
      return cy
        .get(selectorPad)
        .click()
        .then(() => {
          return cy.get(selector).then((elm) => {
            const tile = findFirstTile(elm);
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
