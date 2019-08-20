import { factoryTetro, getRandomTetro, getTetroFromPieces, occupied } from '../src/tetromino';
import { TetroEnum, DirectionEnum, I, NO } from '../src/types';
import { stub } from 'sinon';
import { dataPieces, EMPTY_BOARD, NON_EMPTY_BOARD } from './data.support.test';

describe('tetromino', () => {
  describe('getTetroFromPieces', () => {
    it('should return a tetro from pieces', () => {
      const test = getTetroFromPieces(TetroEnum.Z)(DirectionEnum.N);
      expect(test).toEqual(dataPieces[TetroEnum.Z][DirectionEnum.N]);
    });
  });

  describe('factoryTetro', () => {
    const tetroKeys = Object.keys(TetroEnum);
    const directionKeys = Object.keys(DirectionEnum);
    tetroKeys.forEach((t: string) =>
      directionKeys.forEach((o: string) => {
        it(`should return a tetro of type: ${t}, direction: ${o}`, () => {
          expect(dataPieces[t as TetroEnum][o as DirectionEnum]).toEqual(
            factoryTetro(t as TetroEnum)(o as DirectionEnum)
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

  describe.only('occupied', () => {
    it('should return true if tetro new position is occupied on the board', () => {
      console.log(NON_EMPTY_BOARD);
      const test = occupied(I, NO, 7, 7, NON_EMPTY_BOARD);
      expect(test).toStrictEqual(true);
    });
    it('should return true if tetro new position is not within board 1', () => {
      const test = occupied(I, NO, -10, -10, EMPTY_BOARD);
      expect(test).toStrictEqual(true);
    });
    it('should return true if tetro new position is not within board 2', () => {
      const test = occupied(I, NO, 0, 20, EMPTY_BOARD);
      expect(test).toStrictEqual(true);
    });

    it('should return false if tetro new position is not occupied on the board 1', () => {
      const test = occupied(I, NO, 0, 0, EMPTY_BOARD);
      expect(test).toStrictEqual(false);
    });
    it('should return false if tetro new position is not occupied on the board 2', () => {
      const test = occupied(I, NO, 0, 0, NON_EMPTY_BOARD);
      expect(test).toStrictEqual(false);
    });
  });
});
