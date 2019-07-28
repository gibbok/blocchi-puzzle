import { TetroEnum, Tetro, DirectionEnum, Z, S, J, T, I, O, Pieces } from './types';
import { randomInt } from 'fp-ts/lib/Random';
import { IO, io } from 'fp-ts/lib/IO';

const pieces: Pieces = {
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
