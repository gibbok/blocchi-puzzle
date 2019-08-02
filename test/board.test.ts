import { mkEmptyBoard, canTetroFitInBoard, lockTetroOnBoard } from '../src/board';
import { TetroEnum, DirectionEnum, Board } from '../src/types';

const EMPTY_BOARD: Board = [...Array(20).fill([...Array(10).fill(0)])];
const NON_EMPTY_BOARD: Board = [
  ...Array(20).fill([
    ...Array(10)
      .fill(0, 0, 10)
      .fill(1, 5, 10)
  ])
];

describe('board', () => {
  describe('mkEmptyBoard', () => {
    it('sould return empty board', () => {});
    expect(mkEmptyBoard(20)(10)).toEqual(EMPTY_BOARD);
  });

  // describe('calculateNewBoard', () => {
  //   it('sould return a new board with collision detected', () => {});
  //   const test = calculateNewBoard(TetroEnum.Z)(DirectionEnum.N)(0)(0)(EMPTY_BOARD);
  //   expect(test).toStrictEqual([
  //     [Z, Z, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, Z, Z, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //   ]);
  // });
  // it('should calculate new board', () => {
  //   const test = calculateNewBoard(TetroEnum.Z)(DirectionEnum.N)(0)(1)(EMPTY_BOARD);
  //   expect(test).toStrictEqual([
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [Z, Z, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, Z, Z, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  //   ]);
  // });

  describe('canTetroFitInBoard', () => {
    it('should return true if future position is within WE/ES walls', () => {
      const test = canTetroFitInBoard(TetroEnum.Z)(DirectionEnum.N)(0)(EMPTY_BOARD[0].length - 1)(
        EMPTY_BOARD
      );
      expect(test).toStrictEqual(true);
    });
    it('should return false if future position is not within WE/ES walls', () => {
      const test = canTetroFitInBoard(TetroEnum.Z)(DirectionEnum.N)(0)(1000)(EMPTY_BOARD);
      expect(test).toStrictEqual(false);
    });

    it('should return true if future position is within ∞/SO wall', () => {
      const test1 = canTetroFitInBoard(TetroEnum.Z)(DirectionEnum.N)(0)(1)(EMPTY_BOARD);
      expect(test1).toStrictEqual(true);
      const test2 = canTetroFitInBoard(TetroEnum.Z)(DirectionEnum.N)(EMPTY_BOARD.length - 1)(0)(
        EMPTY_BOARD
      );
      expect(test2).toStrictEqual(true);
    });
    it('should return false if future position is not within ∞/SO wall', () => {
      const test = canTetroFitInBoard(TetroEnum.Z)(DirectionEnum.N)(1000)(0)(EMPTY_BOARD);
      expect(test).toStrictEqual(false);
    });

    it('should return false if future position is already taken by locked tetro in the board', () => {
      const test = canTetroFitInBoard(TetroEnum.Z)(DirectionEnum.N)(0)(5)(NON_EMPTY_BOARD);
      expect(test).toStrictEqual(false);
    });
  });

  describe('lockTetroOnBoard', () => {
    it('should return a new board with the locked tetro', () => {
      const test = lockTetroOnBoard(TetroEnum.Z)(DirectionEnum.N)(0)(5)(NON_EMPTY_BOARD);
      expect(test).toStrictEqual(NON_EMPTY_BOARD);
    });
  });
});
