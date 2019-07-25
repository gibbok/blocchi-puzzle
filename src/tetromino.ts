import { TetrominoEnum, Tetromino, Orientation } from './types';

const Z = TetrominoEnum.Z;
const S = TetrominoEnum.S;
const J = TetrominoEnum.J;
const T = TetrominoEnum.T;
const I = TetrominoEnum.I;
const O = TetrominoEnum.O;

/* eslint-disable prettier/prettier */
const pieces: Record<TetrominoEnum, readonly Tetromino[]> = {
  Z: [
    [
      [Z, Z, 0],
      [0, Z, Z],
      [0, 0, 0]
    ],
    [
      [0, 0, Z],
      [0, Z, Z],
      [0, Z, 0]
    ],
    [
      [0, 0, 0],
      [Z, Z, 0],
      [0, Z, Z]
    ],
    [
      [0, Z, 0],
      [Z, Z, 0],
      [Z, 0, 0]
    ]
  ],
  S: [
    [
      [0, S, S],
      [S, S, 0],
      [0, 0, 0]
    ],
    [
      [0, S, 0],
      [0, S, S],
      [0, 0, S]
    ],
    [
      [0, 0, 0],
      [0, S, S],
      [S, S, 0]
    ],
    [
      [S, 0, 0],
      [S, S, 0],
      [0, S, 0]
    ]
  ],
  J: [
    [
      [0, J, 0],
      [0, J, 0],
      [J, J, 0]
    ],
    [
      [J, 0, 0],
      [J, J, J],
      [0, 0, 0]
    ],
    [
      [0, J, J],
      [0, J, 0],
      [0, J, 0]
    ],
    [
      [0, 0, 0],
      [J, J, J],
      [0, 0, J]
    ]
  ],
  T: [
    [
      [0, 0, 0],
      [T, T, T],
      [0, T, 0]
    ],
    [
      [0, T, 0],
      [T, T, 0],
      [0, T, 0]
    ],
    [
      [0, T, 0],
      [T, T, T],
      [0, 0, 0]
    ],
    [
      [0, T, 0],
      [0, T, T],
      [0, T, 0]
    ],
  ],
  I: [
    [
      [0, I, 0, 0],
      [0, I, 0, 0],
      [0, I, 0, 0],
      [0, I, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [I, I, I, I],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, I, 0],
      [0, 0, I, 0],
      [0, 0, I, 0],
      [0, 0, I, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [I, I, I, I],
      [0, 0, 0, 0],
    ],
  ],
  O: [
    [
      [0, 0, 0, 0],
      [0, O, O, 0],
      [0, O, O, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, O, O, 0],
      [0, O, O, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, O, O, 0],
      [0, O, O, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, O, O, 0],
      [0, O, O, 0],
      [0, 0, 0, 0],
    ],
  ],
}
/* eslint-enable prettier/prettier */

const factoryTetro = (t: TetrominoEnum): ((o: Orientation) => Tetromino) => (o: Orientation): Tetromino => pieces[t][o];

// const mkTetroZ = factoryTetro(TetrominoEnum.Z);
// const mkTetroS = factoryTetro(TetrominoEnum.S);
// const mkTetroJ = factoryTetro(TetrominoEnum.J);
// const mkTetroT = factoryTetro(TetrominoEnum.T);
// const mkTetroI = factoryTetro(TetrominoEnum.I);
// const mkTetroO = factoryTetro(TetrominoEnum.O);
