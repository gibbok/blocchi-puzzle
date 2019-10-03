import { mkEmptyBoard, addTetroToBoard, checkMatchesOnBoard } from '../src/board';
import {
  BOARD_EMPTY,
  BOARD_ROW_EMPTY,
  BOARD_FULL_S,
  BOARD_ROW_S,
  BOARD_HALF_S_Y
} from './data.support.test';
import { TetroEnum, DirectionEnum, I, Board, S } from '../src/types';

describe('board', () => {
  describe('mkEmptyBoard', () => {
    it('sould return empty board', () => {
      expect(mkEmptyBoard(20)(10)).toEqual(BOARD_EMPTY);
    });
  });

  describe('addTetroToBoard', () => {
    it('sould return new board with locked tetro', () => {
      const test = addTetroToBoard(TetroEnum.I)(DirectionEnum.E)(1)(1)(BOARD_EMPTY);
      const result: Board = [
        BOARD_ROW_EMPTY,
        [0, I, I, I, I, 0, 0, 0, 0, 0],
        ...Array(18).fill(BOARD_ROW_EMPTY)
      ];
      expect(test).toEqual(result);
    });

    it('sould return new board with locked tetro overwritting any present tetro', () => {
      const test = addTetroToBoard(TetroEnum.I)(DirectionEnum.E)(0)(0)(BOARD_FULL_S);
      const result: Board = [[I, I, I, I, S, S, S, S, S, S], ...Array(19).fill(BOARD_ROW_S)];
      expect(test).toEqual(result);
    });
  });

  describe.only('checkMatchesOnBoard', () => {
    it('should not return a match if board is empty', () => {
      expect(checkMatchesOnBoard(BOARD_EMPTY)).toEqual([]);
    });

    it('should return the total lines matched plus a board with removed lines', () => {
      expect(checkMatchesOnBoard(BOARD_HALF_S_Y)).toEqual([
        ...Array(14)
          .fill(0)
          .map((_x, idx) => idx + 6)
      ]);
    });
  });
});
