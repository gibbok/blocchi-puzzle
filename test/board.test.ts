import { mkEmptyBoard, canPositionTetroWithinBoard } from '../src/board';
import { TetroEnum, DirectionEnum, Board } from '../src/types';

const EMPTY_BOARD: Board = [...Array(20).fill([...Array(10).fill(0)])];

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

  describe('canPositionTetroWithinBoard', () => {
    describe('board locked tetros', () => {
      it('should return true if tetro can be positioned within the board without colliding with any locked tetros', () => {
        const test = canPositionTetroWithinBoard(TetroEnum.Z)(DirectionEnum.N)(0)(1)(EMPTY_BOARD);
        expect(test).toStrictEqual(true);
      });
    });

    describe('board walls', () => {
      it('should return true if tetro cannot be positionated outside the NO board wall', () => {
        const test = canPositionTetroWithinBoard(TetroEnum.Z)(DirectionEnum.N)(-1000)(0)(
          EMPTY_BOARD
        );
        expect(test).toStrictEqual(false);
      });
      it('should return false if tetro cannot be positionated outside the ES board wall', () => {
        const test = canPositionTetroWithinBoard(TetroEnum.Z)(DirectionEnum.N)(0)(1000)(
          EMPTY_BOARD
        );
        expect(test).toStrictEqual(false);
      });
      it('should return false if tetro cannot be positionated outside the SO board wall', () => {
        const test = canPositionTetroWithinBoard(TetroEnum.Z)(DirectionEnum.N)(1000)(0)(
          EMPTY_BOARD
        );
        expect(test).toStrictEqual(false);
      });
      it('should return false if tetro cannot be positionated outside the WE board wall', () => {
        const test = canPositionTetroWithinBoard(TetroEnum.Z)(DirectionEnum.N)(0)(-1000)(
          EMPTY_BOARD
        );
        expect(test).toStrictEqual(false);
      });

      it('should return true if tetro cannot be positionated exactly on the NO board wall', () => {
        const test = canPositionTetroWithinBoard(TetroEnum.Z)(DirectionEnum.N)(0)(0)(EMPTY_BOARD);
        expect(test).toStrictEqual(true);
      });
      it('should return true if tetro cannot be positionated exactly on the ES board wall', () => {
        const test = canPositionTetroWithinBoard(TetroEnum.Z)(DirectionEnum.N)(0)(
          EMPTY_BOARD.length
        )(EMPTY_BOARD);
        expect(test).toStrictEqual(true);
      });
      it('should return true if tetro cannot be positionated exactly on the SO board wall', () => {
        const test = canPositionTetroWithinBoard(TetroEnum.Z)(DirectionEnum.N)(EMPTY_BOARD.length)(
          0
        )(EMPTY_BOARD);
        expect(test).toStrictEqual(true);
      });

      it('should return true if tetro can be positionated exactly on the WE board wall', () => {
        const test = canPositionTetroWithinBoard(TetroEnum.Z)(DirectionEnum.N)(0)(0)(EMPTY_BOARD);
        expect(test).toStrictEqual(true);
      });
    });
  });
});
