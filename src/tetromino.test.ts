import { factoryTetro, getRandomTetro } from './tetromino';
import { Z, S, J, T, O, I, TetroEnum, DirectionEnum, Pieces } from './types';
import { stub } from 'sinon';

const dataTetro: Pieces = {
  Z: {
    // eslint-disable-next-line prettier/prettier
    N: [
      [Z, Z, 0],
      [0, Z, Z],
      [0, 0, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    E: [
      [0, 0, Z],
      [0, Z, Z],
      [0, Z, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    S: [
      [0, 0, 0],
      [Z, Z, 0],
      [0, Z, Z],
    ],
    // eslint-disable-next-line prettier/prettier
    W: [
      [0, Z, 0],
      [Z, Z, 0],
      [Z, 0, 0]
    ]
  },
  S: {
    // eslint-disable-next-line prettier/prettier
    N: [
      [0, S, S],
      [S, S, 0],
      [0, 0, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    E: [
      [0, S, 0],
      [0, S, S],
      [0, 0, S]
    ],
    // eslint-disable-next-line prettier/prettier
    S: [
      [0, 0, 0],
      [0, S, S],
      [S, S, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    W: [
      [S, 0, 0],
      [S, S, 0],
      [0, S, 0]
    ],
  },
  J: {
    // eslint-disable-next-line prettier/prettier
    N:[
      [0, J, 0],
      [0, J, 0],
      [J, J, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    E:[
      [J, 0, 0],
      [J, J, J],
      [0, 0, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    S:[
      [0, J, J],
      [0, J, 0],
      [0, J, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    W:[
      [0, 0, 0],
      [J, J, J],
      [0, 0, J]
    ]
  },
  T: {
    // eslint-disable-next-line prettier/prettier
    N:[
      [0, 0, 0],
      [T, T, T],
      [0, T, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    E:[
      [0, T, 0],
      [T, T, 0],
      [0, T, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    S:[
      [0, T, 0],
      [T, T, T],
      [0, 0, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    W:[
      [0, T, 0],
      [0, T, T],
      [0, T, 0]
    ]
  },
  I: {
    // eslint-disable-next-line prettier/prettier
    N:[
      [0, I, 0, 0],
      [0, I, 0, 0],
      [0, I, 0, 0],
      [0, I, 0, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    E:[
      [0, 0, 0, 0],
      [I, I, I, I],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    S:[
      [0, 0, I, 0],
      [0, 0, I, 0],
      [0, 0, I, 0],
      [0, 0, I, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    W:[
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [I, I, I, I],
      [0, 0, 0, 0]
    ],
  },
  O: {
    // eslint-disable-next-line prettier/prettier
    N:[
      [0, 0, 0, 0],
      [0, O, O, 0],
      [0, O, O, 0],
      [0, 0, 0, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    E:[
      [0, 0, 0, 0],
      [0, O, O, 0],
      [0, O, O, 0],
      [0, 0, 0, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    S:[
      [0, 0, 0, 0],
      [0, O, O, 0],
      [0, O, O, 0],
      [0, 0, 0, 0]
    ],
    // eslint-disable-next-line prettier/prettier
    W:[
      [0, 0, 0, 0],
      [0, O, O, 0],
      [0, O, O, 0],
      [0, 0, 0, 0]
    ]
  }
};

describe('tetromino', () => {
  describe('factoryTetro', () => {
    const tetroKeys = Object.keys(TetroEnum);
    const directionKeys = Object.keys(DirectionEnum);
    tetroKeys.forEach((t: string) =>
      directionKeys.forEach((o: string) => {
        it(`should return tetro of type: ${t}, direction: ${o}`, () => {
          expect(dataTetro[t as TetroEnum][o as DirectionEnum]).toEqual(
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
      expect(getRandomTetro()()).toEqual(dataTetro[TetroEnum.Z][DirectionEnum.N]);
    });
  });
});
