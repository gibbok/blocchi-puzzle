import {
  getRandomTetro,
  getTetroFromPieces,
  occupied,
  getBlock,
  rotateTetroDirectionACW
} from '../src/tetromino';
import { TetroEnum, DirectionEnum, I, NO, Z } from '../src/types';
import { stub } from 'sinon';
import { dataPieces, BOARD_EMPTY, BOARD_HALF_I_Y } from './data.support.test';
import { none, isSome, toUndefined } from 'fp-ts/lib/Option';

describe('tetromino', () => {
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

  describe('getRandomTetro', () => {
    beforeAll(() => stub(Math, 'random').returns(0));
    afterAll(() => stub().restore());

    it('should return a random tetro', () => {
      expect(getRandomTetro()()).toEqual(dataPieces[TetroEnum.Z][DirectionEnum.N]);
    });
  });

  describe('occupied', () => {
    it('should return true if tetro new position is occupied on the board', () => {
      const test = occupied(I, NO, 7, 7, BOARD_HALF_I_Y);
      expect(test).toStrictEqual(true);
    });
    it('should return true if tetro new position is not within board 1', () => {
      const test = occupied(I, NO, -10, -10, BOARD_EMPTY);
      expect(test).toStrictEqual(true);
    });
    it('should return true if tetro new position is not within board 1', () => {
      const test = occupied(Z, NO, 100, 100, BOARD_EMPTY);
      expect(test).toStrictEqual(true);
    });
    it('should return false if tetro new position is within board 2', () => {
      const test = occupied(Z, NO, 0, 15, BOARD_EMPTY);
      expect(test).toStrictEqual(false);
    });

    it('should return false if tetro new position is not occupied on the board 1', () => {
      const test = occupied(I, NO, 0, 0, BOARD_EMPTY);
      expect(test).toStrictEqual(false);
    });
    it('should return false if tetro new position is not occupied on the board 2', () => {
      const test = occupied(I, NO, 0, 0, BOARD_HALF_I_Y);
      expect(test).toStrictEqual(false);
    });
    it('should return false if tetro new position is not occupied on the board 3', () => {
      const test = occupied(Z, NO, 0, 0, BOARD_EMPTY);
      expect(test).toStrictEqual(false);
    });
    it('should return true if tetro new position is occupied on the board 4', () => {
      const test = occupied(I, NO, 0, 5, BOARD_HALF_I_Y);
      expect(test).toStrictEqual(true);
    });
  });

  describe('getBlock', () => {
    it('should return a block if it is present 1', () => {
      const test = getBlock(0, 0, BOARD_EMPTY);
      expect(isSome(test)).toStrictEqual(true);
      expect(toUndefined(test)).toStrictEqual(0);
    });
    it('should return a block if it is present 2', () => {
      const test = getBlock(0, 7, BOARD_HALF_I_Y);
      expect(isSome(test)).toStrictEqual(true);
      expect(toUndefined(test)).toStrictEqual(I);
    });
    it('should return none if block does not exist', () => {
      const test = getBlock(-100, -100, BOARD_HALF_I_Y);
      expect(test).toStrictEqual(none);
    });
  });

  describe('rotateTetroDirectionACW', () => {
    it('should get the previous direction type anti clock wise', () => {
      expect(rotateTetroDirectionACW(DirectionEnum.W)).toEqual(DirectionEnum.S);
      expect(rotateTetroDirectionACW(DirectionEnum.S)).toEqual(DirectionEnum.E);
    });

    it('should get the last direction, if input tetro direction was the first one', () => {
      expect(rotateTetroDirectionACW(DirectionEnum.N)).toEqual(DirectionEnum.W);
    });
  });
});
