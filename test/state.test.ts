import { calculateState } from '../src/state';
import { TetroEnum, DirectionEnum, Z } from '../src/types';
import { EMPTY_BOARD } from './data.support.test';
import { logNice } from '../src/board';

describe('state', () => {
  describe('calculateState', () => {
    [...Array(17)].fill(0).forEach((_x, idx) => {
      it(`should calcuate state ${idx} no lock tetro`, () => {
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

    [...Array(2)].fill(0).forEach((_x, idx) => {
      it.skip(`x xx should calcuate state ${idx} no lock tetro`, () => {
        const test = calculateState(TetroEnum.Z)(DirectionEnum.N)(18 + idx)(0)(EMPTY_BOARD);
        logNice(test.board);
        expect(test).toStrictEqual({
          tetroType: TetroEnum.Z,
          tetroOrientation: DirectionEnum.N,
          posRow: 18 + idx,
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
    });
  });
});
