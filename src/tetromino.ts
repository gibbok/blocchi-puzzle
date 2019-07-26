import { TetroEnum, Tetro, DirectionEnum, Position, Z, S, J, T, I, O, TetroPos } from './types';

const pieces: Record<TetroEnum, readonly Tetro[]> = {
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

export const factoryTetro = (p: Position) => (t: TetroEnum) => (o: DirectionEnum): TetroPos => ({
  tetro: pieces[t][o],
  pos: p
});
// const x = factoryTetro({ x: 0, y: 0 })(Z)(Orientation.N);
// const mkTetroS = factoryTetro(TetrominoEnum.S);
// const mkTetroJ = factoryTetro(TetrominoEnum.J);
// const mkTetroT = factoryTetro(TetrominoEnum.T);
// const mkTetroI = factoryTetro(TetrominoEnum.I);
// const mkTetroO = factoryTetro(TetrominoEnum.O);
