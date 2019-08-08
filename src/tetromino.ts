/* eslint-disable prettier/prettier */
import { TetroEnum, Tetro, DirectionEnum, Z, S, J, T, I, O, TetroPieces } from './types';
import { randomInt } from 'fp-ts/lib/Random';
import { IO, io } from 'fp-ts/lib/IO';

export const pieces: TetroPieces = {
  Z: {
    N: [
      [Z, Z, 0],
      [0, Z, Z],
    ],
    E: [
      [0, 0, Z],
      [0, Z, Z],
      [0, Z, 0]
    ],
    S: [
      [Z, Z, 0],
      [0, Z, Z]
    ],
    W: [
      [0, Z, 0],
      [Z, Z, 0],
      [Z, 0, 0]
    ]
  },
  S: {
    N: [
      [0, S, S],
      [S, S, 0],
    ],
    E: [
      [S, 0],
      [S, S],
      [0, S]
    ],
    S: [
      [0, S, S],
      [S, S, 0]
    ],
    W: [
      [S, 0, 0],
      [S, S, 0],
      [0, S, 0]
    ]
  },
  J: {
    N: [
      [0, J],
      [0, J],
      [J, J]
    ],
    E: [
      [J, 0, 0],
      [J, J, J],
    ],
    S: [
      [J, J],
      [J, 0],
      [J, 0]
    ],
    W: [
      [J, J, J],
      [0, 0, J]
    ]
  },
  T: {
    N: [
      [T, T, T],
      [0, T, 0]
    ],
    E: [
      [0, T,],
      [T, T,],
      [0, T,]
    ],
    S: [
      [0, T, 0],
      [T, T, T],
    ],
    W: [
      [T, 0],
      [T, T],
      [T, 0]
    ]
  },
  I: {
    N: [
      [I,],
      [I,],
      [I,],
      [I,]
    ],
    E: [
      [I, I, I, I],
    ],
    S: [
      [I,],
      [I,],
      [I,],
      [I,]
    ],
    W: [
      [I, I, I, I],
    ]
  },
  O: {
    N: [
      [O, O,],
      [O, O,],
    ],
    E: [
      [O, O,],
      [O, O,],
    ],
    S: [
      [O, O,],
      [O, O,],
    ],
    W: [
      [O, O,],
      [O, O,],
    ]
  }
};

export const getTetroFromPieces = (t: TetroEnum) => (d: DirectionEnum): Tetro => pieces[t][d];

export const factoryTetro = (t: TetroEnum) => (o: DirectionEnum): Tetro => pieces[t][o];

export const getRandomTetro = (): IO<Tetro> => {
  const rndInt = randomInt(0, Object.keys(TetroEnum).length - 1)();
  const rndEnum = Object.keys(TetroEnum)[rndInt];
  return io.of(pieces[rndEnum as TetroEnum][DirectionEnum.N]);
};
// const x = factoryTetro({ x: 0, y: 0 })(Z)(Orientation.N);
// const mkTetroS = factoryTetro(TetrominoEnum.S);
// const mkTetroJ = factoryTetro(TetrominoEnum.J);
// const mkTetroT = factoryTetro(TetrominoEnum.T);
// const mkTetroI = factoryTetro(TetrominoEnum.I);
// const mkTetroO = factoryTetro(TetrominoEnum.O);
