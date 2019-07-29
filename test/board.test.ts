import { mkEmptyBoard } from '../src/board';

describe('board', () => {
  describe('mkEmptyBoard', () => {
    it('sould return empty board', () => {});
    expect(mkEmptyBoard(20)(10)).toEqual([...Array(20).fill([...Array(10).fill(0)])]);
  });
});
