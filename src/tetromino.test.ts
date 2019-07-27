import { factoryTetro } from './tetromino';
import { Z, S, J, T, O, I, TetroEnum, DirectionEnum, Tetro } from './types';

const dataTetroDirection: Record<TetroEnum, readonly Tetro[]> = {
  Z: [
    [[Z, Z, 0], [0, Z, Z], [0, 0, 0]],
    [[0, 0, Z], [0, Z, Z], [0, Z, 0]],
    [[0, 0, 0], [Z, Z, 0], [0, Z, Z]],
    [[0, Z, 0], [Z, Z, 0], [Z, 0, 0]]
  ],
  S: [
    [[0, S, S], [S, S, 0], [0, 0, 0]],
    [[0, S, 0], [0, S, S], [0, 0, S]],
    [[0, 0, 0], [0, S, S], [S, S, 0]],
    [[S, 0, 0], [S, S, 0], [0, S, 0]]
  ],
  J: [
    [[0, J, 0], [0, J, 0], [J, J, 0]],
    [[J, 0, 0], [J, J, J], [0, 0, 0]],
    [[0, J, J], [0, J, 0], [0, J, 0]],
    [[0, 0, 0], [J, J, J], [0, 0, J]]
  ],
  T: [
    [[0, 0, 0], [T, T, T], [0, T, 0]],
    [[0, T, 0], [T, T, 0], [0, T, 0]],
    [[0, T, 0], [T, T, T], [0, 0, 0]],
    [[0, T, 0], [0, T, T], [0, T, 0]]
  ],
  I: [
    [[0, I, 0, 0], [0, I, 0, 0], [0, I, 0, 0], [0, I, 0, 0]],
    [[0, 0, 0, 0], [I, I, I, I], [0, 0, 0, 0], [0, 0, 0, 0]],
    [[0, 0, I, 0], [0, 0, I, 0], [0, 0, I, 0], [0, 0, I, 0]],
    [[0, 0, 0, 0], [0, 0, 0, 0], [I, I, I, I], [0, 0, 0, 0]]
  ],
  O: [
    [[0, 0, 0, 0], [0, O, O, 0], [0, O, O, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, O, O, 0], [0, O, O, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, O, O, 0], [0, O, O, 0], [0, 0, 0, 0]],
    [[0, 0, 0, 0], [0, O, O, 0], [0, O, O, 0], [0, 0, 0, 0]]
  ]
};

describe('tetromino', () => {
  describe('factoryTetro', () => {
    Object.keys(TetroEnum).forEach((t: string) =>
      dataTetroDirection[t as TetroEnum].forEach((tetro: Tetro, o: DirectionEnum) => {
        it(`should return tetro of type: ${t}, direction: ${DirectionEnum[o]}`, () =>
          expect(tetro).toEqual(factoryTetro(t as TetroEnum)(o as DirectionEnum)));
      })
    );
  });
});
