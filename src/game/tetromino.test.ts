import {
  getRandomTetro,
  getTetroFromPieces,
  isOccupied,
  rotateTetroDirectionCW,
  getBlockFromBoard,
  getRandomTetroEnum
} from '.';
import { stub } from 'sinon';
import { dataPieces, BOARD_EMPTY, BOARD_HALF_I_Y } from '../utils';
import { none, isSome, toUndefined } from 'fp-ts/lib/Option';
import { TetroEnum, DirectionEnum, I, NO, Z, ES, L } from './types';

describe('tetromino', () => {
  beforeAll(() => stub(Math, 'random').returns(0));
  afterAll(() => stub().restore());

  describe('getTetroFromPieces', () => {
    const tetroKeys = Object.keys(TetroEnum);
    const directionKeys = Object.keys(DirectionEnum);
    tetroKeys.forEach((t: string) =>
      directionKeys.forEach((o: string) => {
        it(`should return a tetro of type: ${t}, direction: ${o}`, () => {
          expect(dataPieces[t as TetroEnum][o as DirectionEnum]).toEqual(
            getTetroFromPieces(t as TetroEnum, o as DirectionEnum)
          );
        });
      })
    );
  });

  describe('getRandomTetroEnum', () => {
    it('should return a random tetro enum', () => {
      expect(getRandomTetroEnum()()).toEqual(TetroEnum.Z);
    });
  });

  describe('getRandomTetro', () => {
    it('should return a random tetro', () => {
      expect(getRandomTetro()()).toEqual(dataPieces[TetroEnum.Z][DirectionEnum.N]);
    });
  });

  describe('occupied', () => {
    it('should return true if tetro new position is occupied on the board', () => {
      const test = isOccupied(I, NO, 7, 7, BOARD_HALF_I_Y);
      expect(test).toStrictEqual(true);
    });
    it('should return true if tetro new position is not within board 1', () => {
      const test = isOccupied(I, NO, -10, -10, BOARD_EMPTY);
      expect(test).toStrictEqual(true);
    });
    it('should return true if tetro new position is not within board 1', () => {
      const test = isOccupied(Z, NO, 100, 100, BOARD_EMPTY);
      expect(test).toStrictEqual(true);
    });
    it('should return false if tetro new position is within board 2', () => {
      const test = isOccupied(Z, NO, 0, 15, BOARD_EMPTY);
      expect(test).toStrictEqual(false);
    });

    it('should return false if tetro new position is not occupied on the board 1', () => {
      const test = isOccupied(I, NO, 0, 0, BOARD_EMPTY);
      expect(test).toStrictEqual(false);
    });
    it('should return false if tetro new position is not occupied on the board 2', () => {
      const test = isOccupied(I, NO, 0, 0, BOARD_HALF_I_Y);
      expect(test).toStrictEqual(false);
    });
    it('should return false if tetro new position is not occupied on the board 3', () => {
      const test = isOccupied(Z, NO, 0, 0, BOARD_EMPTY);
      expect(test).toStrictEqual(false);
    });
    it('should return true if tetro new position is occupied on the board 4', () => {
      const test = isOccupied(I, NO, 0, 5, BOARD_HALF_I_Y);
      expect(test).toStrictEqual(true);
    });
    it('should return false, board piece is within space of tetro but there is no collision', () => {
      const boardTest = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      const test = isOccupied(L, ES, 0, 0, boardTest);
      expect(test).toStrictEqual(false);
    });
    it('should return true, piece in board collide with tetro space', () => {
      const boardTest = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [I, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      const test = isOccupied(L, ES, 0, 0, boardTest);
      expect(test).toStrictEqual(true);
    });
    it('should return true, piece in board collide with tetro space 2', () => {
      const boardTest = [
        [0, 0, I, 0, 0, 0, 0, 0, 0, 0],
        [I, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, I, 0, 0, 0, 0, 0, 0, 0, 0]
      ];
      const test = isOccupied(L, ES, 0, 0, boardTest);
      expect(test).toStrictEqual(true);
    });
    it('SPO 1 - should return false when tetro is on the edge', () => {
      const boardTest = [
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //  [0, 0, 0, 0], x:0,y:16
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //  [I, I, I, I],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], //  [0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] //   [0, 0, 0, 0],
      ];
      const test = isOccupied(I, ES, 0, 16, boardTest);
      expect(test).toStrictEqual(false);
    });
  });

  describe('getBlock', () => {
    it('should return a block if it is present 1', () => {
      const test = getBlockFromBoard(0, 0, BOARD_EMPTY);
      expect(isSome(test)).toStrictEqual(true);
      expect(toUndefined(test)).toStrictEqual(0);
    });
    it('should return a block if it is present 2', () => {
      const test = getBlockFromBoard(0, 7, BOARD_HALF_I_Y);
      expect(isSome(test)).toStrictEqual(true);
      expect(toUndefined(test)).toStrictEqual(I);
    });
    it('should return none if block does not exist', () => {
      const test = getBlockFromBoard(-100, -100, BOARD_HALF_I_Y);
      expect(test).toStrictEqual(none);
    });
  });

  describe('rotateTetroDirectionCW', () => {
    it('should get the next direction type clock wise', () => {
      expect(rotateTetroDirectionCW(DirectionEnum.N)).toEqual(DirectionEnum.E);
      expect(rotateTetroDirectionCW(DirectionEnum.E)).toEqual(DirectionEnum.S);
      expect(rotateTetroDirectionCW(DirectionEnum.S)).toEqual(DirectionEnum.W);
      expect(rotateTetroDirectionCW(DirectionEnum.W)).toEqual(DirectionEnum.N);
    });
  });
});
