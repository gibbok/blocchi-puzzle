import { factoryTetro, getRandomTetro } from '../src/tetromino';
import { TetroEnum, DirectionEnum } from '../src/types';
import { stub } from 'sinon';
import { testPieces } from './data.support.test';

describe('tetromino', () => {
  describe('factoryTetro', () => {
    const tetroKeys = Object.keys(TetroEnum);
    const directionKeys = Object.keys(DirectionEnum);
    tetroKeys.forEach((t: string) =>
      directionKeys.forEach((o: string) => {
        it(`should return tetro of type: ${t}, direction: ${o}`, () => {
          expect(testPieces[t as TetroEnum][o as DirectionEnum]).toEqual(
            factoryTetro(t as TetroEnum)(o as DirectionEnum)
          );
        });
      })
    );
  });

  describe('getRandomTetro', () => {
    beforeAll(() => stub(Math, 'random').returns(0));
    afterAll(() => stub().restore());

    it('should return random tetro', () => {
      expect(getRandomTetro()()).toEqual(testPieces[TetroEnum.Z][DirectionEnum.N]);
    });
  });
});
