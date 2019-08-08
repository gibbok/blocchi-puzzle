import { calculateState } from '../src/state';
import { TetroEnum, DirectionEnum, I, Z } from '../src/types';
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
          board: EMPTY_BOARD // TOFIX: somehting wrong here
        });
      });
    });
  });
});
