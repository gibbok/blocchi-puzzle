import { calculateState } from '../src/state';
import { TetroEnum, DirectionEnum, Z } from '../src/types';
import { EMPTY_BOARD } from './data.support.test';

describe('state', () => {
  describe('calculateState', () => {
    [...Array(17)].fill(0).forEach((_x, idx) => {
      it(`should return state ${idx} with empty board`, () => {
        const test = calculateState(TetroEnum.Z)(DirectionEnum.N)(idx)(0)(EMPTY_BOARD);
        // logNice(test.board);
        expect(test).toStrictEqual({
          tetroType: TetroEnum.Z,
          tetroOrientation: DirectionEnum.N,
          posRow: idx,
          posCell: 0,
          board: EMPTY_BOARD
        });
      });
    });

    it(`should return state with locked tetro on the board if next tetro move is outside SO wall`, () => {
      const test = calculateState(TetroEnum.Z)(DirectionEnum.N)(18)(0)(EMPTY_BOARD);
      expect(test).toStrictEqual({
        tetroType: TetroEnum.Z,
        tetroOrientation: DirectionEnum.N,
        posRow: 18,
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
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          [Z, Z, 0, 0, 0, 0, 0, 0, 0, 0],
          [0, Z, Z, 0, 0, 0, 0, 0, 0, 0]
        ]
      });
    });

    it(`should return state with empty board if next tetro move is within SO wall`, () => {
      const test = calculateState(TetroEnum.Z)(DirectionEnum.N)(17)(0)(EMPTY_BOARD);
      expect(test).toStrictEqual({
        tetroType: TetroEnum.Z,
        tetroOrientation: DirectionEnum.N,
        posRow: 17,
        posCell: 0,
        board: EMPTY_BOARD
      });
    });
  });
});
