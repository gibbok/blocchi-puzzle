import { factoryTetro } from './tetromino';
import { Z, NO, ES, SO, WE, S, J, T } from './types';

describe('tetromino', () => {
  describe('factoryTetro', () => {
    //#region Tetro Z
    it('should return tetro: position: 0/0, type: Z, orientation: N', () =>
      expect(factoryTetro({ x: 0, y: 0 })(Z)(NO)).toEqual({
        position: { x: 0, y: 0 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [Z, Z, 0],
          [0, Z, Z],
          [0, 0, 0]
        ]
      }));

    it('should return tetro: position: 5/5, type: Z, orientation: N', () =>
      expect(factoryTetro({ x: 5, y: 5 })(Z)(NO)).toEqual({
        position: { x: 5, y: 5 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [Z, Z, 0],
          [0, Z, Z],
          [0, 0, 0]
        ]
      }));

    it('should return tetro: position: 0/0, type: Z, orientation: E', () =>
      expect(factoryTetro({ x: 0, y: 0 })(Z)(ES)).toEqual({
        position: { x: 0, y: 0 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, 0, Z],
          [0, Z, Z],
          [0, Z, 0]
        ]
      }));

    it('should return tetro: position: 0/0, type: Z, orientation: S', () =>
      expect(factoryTetro({ x: 0, y: 0 })(Z)(SO)).toEqual({
        position: { x: 0, y: 0 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, 0, 0],
          [Z, Z, 0],
          [0, Z, Z]
        ]
      }));

    it('should return tetro: position: 0/0, type: Z, orientation: W', () =>
      expect(factoryTetro({ x: 0, y: 0 })(Z)(WE)).toEqual({
        position: { x: 0, y: 0 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, Z, 0],
          [Z, Z, 0],
          [Z, 0, 0]
        ]
      }));
    //#endregion

    //#region Tetor J
    it('should return tetro: position: 0/0, type: J, orientation: N', () =>
      expect(factoryTetro({ x: 0, y: 0 })(J)(NO)).toEqual({
        position: { x: 0, y: 0 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, J, 0],
          [0, J, 0],
          [J, J, 0]
        ]
      }));

    it('should return tetro: position: 5/5, type: J, orientation: N', () =>
      expect(factoryTetro({ x: 5, y: 5 })(J)(NO)).toEqual({
        position: { x: 5, y: 5 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, J, 0],
          [0, J, 0],
          [J, J, 0]
        ]
      }));

    it('should return tetro: position: 0/0, type: J, orientation: E', () =>
      expect(factoryTetro({ x: 0, y: 0 })(J)(ES)).toEqual({
        position: { x: 0, y: 0 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [J, 0, 0],
          [J, J, J],
          [0, 0, 0]
        ]
      }));

    it('should return tetro: position: 0/0, type: J, orientation: S', () =>
      expect(factoryTetro({ x: 0, y: 0 })(J)(SO)).toEqual({
        position: { x: 0, y: 0 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, J, J],
          [0, J, 0],
          [0, J, 0]
        ]
      }));
    it('should return tetro: position: 0/0, type: J, orientation: W', () =>
      expect(factoryTetro({ x: 0, y: 0 })(J)(WE)).toEqual({
        position: { x: 0, y: 0 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, 0, 0],
          [J, J, J],
          [0, 0, J]
        ]
      }));
    //#endregion
    //#region Tetor T
    it('should return tetro: position: 0/0, type: T, orientation: N', () =>
      expect(factoryTetro({ x: 0, y: 0 })(T)(NO)).toEqual({
        position: { x: 0, y: 0 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, 0, 0],
          [T, T, T],
          [0, T, 0]
        ]
      }));

    it('should return tetro: position: 5/5, type: T, orientation: N', () =>
      expect(factoryTetro({ x: 5, y: 5 })(T)(NO)).toEqual({
        position: { x: 5, y: 5 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, 0, 0],
          [T, T, T],
          [0, T, 0]
        ]
      }));

    it('should return tetro: position: 0/0, type: T, orientation: E', () =>
      expect(factoryTetro({ x: 0, y: 0 })(T)(ES)).toEqual({
        position: { x: 0, y: 0 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, T, 0],
          [T, T, 0],
          [0, T, 0]
        ]
      }));

    it('should return tetro: position: 0/0, type: T, orientation: S', () =>
      expect(factoryTetro({ x: 0, y: 0 })(T)(SO)).toEqual({
        position: { x: 0, y: 0 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, T, 0],
          [T, T, T],
          [0, 0, 0]
        ]
      }));
    it('should return tetro: position: 0/0, type: T, orientation: W', () =>
      expect(factoryTetro({ x: 0, y: 0 })(T)(WE)).toEqual({
        position: { x: 0, y: 0 },
        // eslint-disable-next-line prettier/prettier
        tetromino: [
          [0, T, 0],
          [0, T, T],
          [0, T, 0],
        ]
      }));
    //#endregion
  });
});
