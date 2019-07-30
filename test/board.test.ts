import { mkEmptyBoard, calculateNewBoard, logNice } from '../src/board';
import { TetroEnum, DirectionEnum, Board, Tetro, TetroRow, BoardRow, Cell, Z } from '../src/types';

const EMPTY_BOARD: Board = [...Array(20).fill([...Array(10).fill(0)])];

describe('board', () => {
  describe('mkEmptyBoard', () => {
    it('sould return empty board', () => {});
    expect(mkEmptyBoard(20)(10)).toEqual(EMPTY_BOARD);
  });

  describe('calculateNewBoard', () => {
    it('sould return a new board with collision detected', () => {});
    const test = calculateNewBoard(TetroEnum.Z)(DirectionEnum.N)(0)(0)(EMPTY_BOARD);
    expect(test).toStrictEqual([
      [Z, Z, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, Z, Z, 0, 0, 0, 0, 0, 0, 0],
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
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]);
  });
});
