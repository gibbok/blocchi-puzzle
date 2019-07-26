import { factoryTetro } from './tetromino';
import { Z, Orientation } from './types';

describe('tetromino', () => {
  describe('factoryTetro', () => {
    it('should return tetro: position: 0/0, type: Z, orientation: N', () =>
      expect(
        factoryTetro({
          x: 0,
          y: 0
        })(Z)(Orientation.N)
      ).toEqual({
        position: {
          x: 0,
          y: 0
        },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [Z, Z, 0],
          [0, Z, Z],
          [0, 0, 0]
        ]
      }));

    it('should return tetro: position: 5/5, type: Z, orientation: N', () =>
      expect(
        factoryTetro({
          x: 5,
          y: 5
        })(Z)(Orientation.N)
      ).toEqual({
        position: {
          x: 5,
          y: 5
        },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [Z, Z, 0],
          [0, Z, Z],
          [0, 0, 0]
        ]
      }));

    it('should return tetro: position: 5/5, type: Z, orientation: E', () =>
      expect(
        factoryTetro({
          x: 0,
          y: 0
        })(Z)(Orientation.E)
      ).toEqual({
        position: {
          x: 0,
          y: 0
        },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, 0, Z],
          [0, Z, Z],
          [0, Z, 0]
        ]
      }));
  });
});
