import { mkInternalState } from '../src/state';
import { TetroEnum, DirectionEnum, Z } from '../src/types';
import { EMPTY_BOARD } from './data.support.test';

describe('state', () => {
  describe('mkInternalState', () => {
    [...Array(17)].fill(0).forEach((_x, idx) => {
      it(`should return a new state ${idx} with an empty board`, () => {
        const test = mkInternalState(TetroEnum.Z)(DirectionEnum.N)(idx)(0)(EMPTY_BOARD);
        expect(test).toStrictEqual({
          tetroType: TetroEnum.Z,
          tetroOrientation: DirectionEnum.N,
          posRow: idx,
          posCell: 0,
          board: EMPTY_BOARD
        });
      });
    });

    it(`should return a new state with a locked tetro on the board, if next tetro move is outside SO wall`, () => {
      const test = mkInternalState(TetroEnum.Z)(DirectionEnum.N)(18)(0)(EMPTY_BOARD);
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

    it(`should return a new state with an empty board, if next tetro move is within SO wall`, () => {
      const test = mkInternalState(TetroEnum.Z)(DirectionEnum.N)(17)(0)(EMPTY_BOARD);
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
