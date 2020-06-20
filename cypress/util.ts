import { pipe } from 'fp-ts/lib/pipeable';

type TileDataset = 'testColumn' | 'testRow' | 'testVariant';

export const findTiles = (elm: JQuery<HTMLElement>): JQuery<HTMLElement> =>
  elm.find('[data-test-variant]');

export const filterBoardForTiles = (elm: JQuery<HTMLElement>): JQuery<HTMLElement> =>
  elm.filter((idx: number, y: HTMLElement) => y.dataset.testVariant !== '0');

export const findTile = (idx: number) => (elm: JQuery<HTMLElement>): HTMLElement =>
  pipe(findTiles(elm), filterBoardForTiles, (x) => x.get(idx));

export const firstTile = findTile(1);

export const lastTile = findTile(-1);

export const getTileDataset = (elm: HTMLElement, type: TileDataset): string | undefined =>
  elm?.dataset?.[type];

export const getDataTiles = (elm: JQuery<HTMLElement>): ReadonlyArray<string> =>
  pipe(findTiles(elm), filterBoardForTiles)
    .toArray()
    .map(({ dataset }) => [
      dataset.testVariant ?? '',
      dataset.testRow ?? '',
      dataset.testColumn ?? '',
    ])
    .flat();

export const getDataFromContainer = (selector: Sel): Cypress.Chainable<ReadonlyArray<string>> =>
  cy.get(selector).then((elm) => {
    const data = getDataTiles(elm);
    return Promise.resolve(data);
  });

export const checkTilePosition = (
  selector: string,
  selectorPad: Sel.padLeft | Sel.padRight | Sel.padDown,
  type: TileDataset
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
            const posAfter = Number(getTileDataset(tile, type));
            return Promise.resolve({
              posBefore,
              posAfter,
            });
          });
        });
    });
};

export const hasTiles = (elm: JQuery<HTMLElement>): void => {
  const hasTiles = findTiles(elm).is(
    (idx: number, y: HTMLElement) => y.dataset.testVariant !== '0'
  );
  expect(hasTiles).to.be.true;
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
  screenIntro = '[data-test=screen-intro]',
  screenGame = '[data-test=screen-game]',
  screenOver = '[data-test=screen-over]',
}
