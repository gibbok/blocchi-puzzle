import { logic } from '../src/main';
import { mkEmptyBoard } from '../src/board';
import { TetroEnum, DirectionEnum } from '../src/types';

describe('main', () => {
  describe('logic', () => {
    it('should take tetro type I with direction N and move it down and lock it at the bottom of the board ', () => {
      const b = mkEmptyBoard(20)(10);
      const test = logic(TetroEnum.I)(DirectionEnum.N)(0)(0)(b);
      expect(test).toEqual({
        tetroType: 'I',
        tetroOrientation: 'N',
        posRow: 20,
        posCell: 0,
        board: [
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ['I', 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ['I', 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ['I', 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ['I', 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
      });
    });
  });
});
