import { mkEmptyBoard, canTetroFitInBoard, lockTetroOnBoard } from '../src/board';
import { TetroEnum, DirectionEnum, Z, I } from '../src/types';
import { dataBoardZ, EMPTY_BOARD, NON_EMPTY_BOARD } from './data.support.test';

describe('board', () => {
  describe('mkEmptyBoard', () => {
    it('sould return empty board', () => {
      expect(mkEmptyBoard(20)(10)).toEqual(EMPTY_BOARD);
    });
  });

  describe('canTetroFitInBoard', () => {
    it('should return false if tetro future position and lenght does not fit within WE/ES walls', () => {
      const test = canTetroFitInBoard(TetroEnum.I)(DirectionEnum.E)(0)(EMPTY_BOARD[0].length - 1)(
        EMPTY_BOARD
      );
      expect(test).toStrictEqual(false);
    });
    it('should return true if tetro future position and lenght does fit within WE/ES walls', () => {
      const test = canTetroFitInBoard(TetroEnum.I)(DirectionEnum.E)(0)(0)(EMPTY_BOARD);
      expect(test).toStrictEqual(true);
    });
    it('should return false if tetro future position is not within WE/ES walls', () => {
      const test = canTetroFitInBoard(TetroEnum.I)(DirectionEnum.E)(0)(1000)(EMPTY_BOARD);
      expect(test).toStrictEqual(false);
    });
    it('should return true if tetro future position is within WE/ES walls', () => {
      const test = canTetroFitInBoard(TetroEnum.Z)(DirectionEnum.N)(0)(0)(EMPTY_BOARD);
      expect(test).toStrictEqual(true);
    });

    it('should return false if tetro future position and length does not fit within ∞/SO wall', () => {
      const test = canTetroFitInBoard(TetroEnum.I)(DirectionEnum.N)(EMPTY_BOARD.length - 1)(0)(
        EMPTY_BOARD
      );
      expect(test).toStrictEqual(false);
    });
    it('should return true if tetro future position and length does fit within ∞/SO wall', () => {
      const test = canTetroFitInBoard(TetroEnum.I)(DirectionEnum.N)(0)(0)(EMPTY_BOARD);
      expect(test).toStrictEqual(true);
    });
    it('should return false if tetro future position does not fit within ∞/SO wall', () => {
      const test = canTetroFitInBoard(TetroEnum.I)(DirectionEnum.N)(1000)(0)(EMPTY_BOARD);
      expect(test).toStrictEqual(false);
    });
    it('should return true if tetro future position does fit within ∞/SO wall', () => {
      const test = canTetroFitInBoard(TetroEnum.I)(DirectionEnum.N)(0)(0)(EMPTY_BOARD);
      expect(test).toStrictEqual(true);
    });

    it('should return false if tetro future position is already taken by locked tetro in the board', () => {
      const test = canTetroFitInBoard(TetroEnum.Z)(DirectionEnum.N)(0)(5)(NON_EMPTY_BOARD);
      expect(test).toStrictEqual(false);
    });

    Object.keys(TetroEnum).forEach((t: string) => {
      Object.keys(DirectionEnum).forEach((d: string) => {
        it(`should return true if tetro ${t} future position with direction ${d} fit in empty board`, () => {
          const test = canTetroFitInBoard(t as TetroEnum)(DirectionEnum.N)(0)(0)(EMPTY_BOARD);
          expect(test).toStrictEqual(true);
        });
        it(`should return false if tetro ${t} future position with direction ${d} does not fit in empty board`, () => {
          const test = canTetroFitInBoard(t as TetroEnum)(DirectionEnum.N)(1000)(1000)(EMPTY_BOARD);
          expect(test).toStrictEqual(false);
        });
        it(`should return false if tetro ${t} future position is already taken by locked tetro in the board`, () => {
          const test = canTetroFitInBoard(t as TetroEnum)(DirectionEnum.N)(0)(5)(NON_EMPTY_BOARD);
          expect(test).toStrictEqual(false);
        });
      });
    });
  });

  describe('lockTetroOnBoard', () => {
    it('should return new board with locked tetro', () => {
      const test = lockTetroOnBoard(TetroEnum.Z)(DirectionEnum.N)(2)(2)(EMPTY_BOARD);
      expect(test).toStrictEqual(dataBoardZ);
    });
    it('should return new board with two adjacent locked tetros', () => {
      const test = lockTetroOnBoard(TetroEnum.Z)(DirectionEnum.N)(2)(4)(dataBoardZ);
      expect(test).toStrictEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, Z, Z, Z, Z, 0, 0, 0, 0],
        [0, 0, 0, Z, Z, Z, Z, 0, 0, 0],
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]);
    });

    it('should return a new board with locked tetro on top of another', () => {
      const test = lockTetroOnBoard(TetroEnum.I)(DirectionEnum.N)(2)(3)(dataBoardZ);
      expect(test).toStrictEqual([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, Z, I, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, I, Z, 0, 0, 0, 0, 0],
        [0, 0, 0, I, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, I, 0, 0, 0, 0, 0, 0],
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]);
    });

    it('should return same board if tetro does not fit within walls', () => {
      const test = lockTetroOnBoard(TetroEnum.I)(DirectionEnum.N)(1000)(1000)(EMPTY_BOARD);
      expect(test).toStrictEqual(EMPTY_BOARD);
    });

    it('should return a new board with locked tetro direction NO on the SO wall', () => {
      const test = lockTetroOnBoard(TetroEnum.I)(DirectionEnum.N)(16)(0)(EMPTY_BOARD);
      expect(test).toStrictEqual([
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
        [I, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [I, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [I, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [I, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]);
    });

    it('should return a new board with locked tetro direction ES on the SO wall', () => {
      const test = lockTetroOnBoard(TetroEnum.I)(DirectionEnum.E)(19)(0)(EMPTY_BOARD);
      expect(test).toStrictEqual([
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [I, I, I, I, 0, 0, 0, 0, 0, 0]
      ]);
    });

    it('should return a new board with locked tetro direction ES on the SO wall ES side', () => {
      const test = lockTetroOnBoard(TetroEnum.I)(DirectionEnum.E)(19)(6)(EMPTY_BOARD);
      expect(test).toStrictEqual([
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, I, I, I, I]
      ]);
    });
    it('should return a new board locking the tero without considering if it fit in the board', () => {
      const test = lockTetroOnBoard(TetroEnum.I)(DirectionEnum.E)(19)(8)(EMPTY_BOARD);
      expect(test).toStrictEqual([
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, I, I]
      ]);
    });
  });
});
