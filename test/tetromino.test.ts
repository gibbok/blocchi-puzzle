import { factoryTetro, getRandomTetro, getTetroFromPieces } from '../src/tetromino';
import { TetroEnum, DirectionEnum } from '../src/types';
import { stub } from 'sinon';
import { dataPieces } from './data.support.test';

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
});
