import { mkEmptyBoard } from '../src/board';
import { EMPTY_BOARD } from './data.support.test';

describe('board', () => {
  describe('mkEmptyBoard', () => {
    it('sould return empty board', () => {
      expect(mkEmptyBoard(20)(10)).toEqual(EMPTY_BOARD);
    });
  });
});
