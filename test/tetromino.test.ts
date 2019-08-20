import {
  factoryTetro,
  getRandomTetro,
  getTetroFromPieces,
  occupied,
  getBlock
} from '../src/tetromino';
import { TetroEnum, DirectionEnum, I, NO, Z } from '../src/types';
import { stub } from 'sinon';
import { dataPieces, EMPTY_BOARD, NON_EMPTY_BOARD } from './data.support.test';
import { none, isSome, toUndefined } from 'fp-ts/lib/Option';
import { logNice } from '../src/board';

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

  describe('occupied', () => {
    const tI = occupied(I)(NO);
    const tZ = occupied(Z)(NO);
    it('should return true if tetro new position is occupied on the board', () => {
      const test = tI(7)(7)(NON_EMPTY_BOARD);
      expect(test).toStrictEqual(true);
    });
    it('should return true if tetro new position is not within board 1', () => {
      const test = tI(-10)(-10)(EMPTY_BOARD);
      expect(test).toStrictEqual(true);
    });
    it('should return false if tetro new position is within board 2', () => {
      const test = tZ(0)(15)(EMPTY_BOARD);
      expect(test).toStrictEqual(false);
    });

    it('should return false if tetro new position is not occupied on the board 1', () => {
      const test = tI(0)(0)(EMPTY_BOARD);
      expect(test).toStrictEqual(false);
    });
    it('should return false if tetro new position is not occupied on the board 2', () => {
      const test = tI(0)(0)(NON_EMPTY_BOARD);
      expect(test).toStrictEqual(false);
    });
    it('should return false if tetro new position is not occupied on the board 3', () => {
      const test = tZ(0)(0)(EMPTY_BOARD);
      expect(test).toStrictEqual(false);
    });
    it.only('should return true if tetro new position is occupied on the board 4', () => {
      logNice(NON_EMPTY_BOARD);
      const test = tI(0)(5)(NON_EMPTY_BOARD);
      expect(test).toStrictEqual(true);
    });
  });

  // describe('getBlock', () => {
  //   it('should return a block if it is present 1', () => {
  //     const test = getBlock(0)(0)(EMPTY_BOARD);
  //     expect(isSome(test)).toStrictEqual(true);
  //     expect(toUndefined(test)).toStrictEqual(0);
  //   });
  //   it('should return a block if it is present 2', () => {
  //     const test = getBlock(0)(7)(NON_EMPTY_BOARD);
  //     expect(isSome(test)).toStrictEqual(true);
  //     expect(toUndefined(test)).toStrictEqual(I);
  //   });
  //   it('should return none if block does not exist', () => {
  //     const test = getBlock(-100)(-100)(NON_EMPTY_BOARD);
  //     expect(test).toStrictEqual(none);
  //   });
  // });
});
