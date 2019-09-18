/* eslint-disable prettier/prettier */
import { TetroPieces, Z, S, J, T, I, O, Board, TetroEnum, Block } from '../src/types';

export const dataPieces: TetroPieces = {
  Z: {
    N: [
      [Z, Z, 0],
      [0, Z, Z],
    ],
    E: [
      [0, Z],
      [Z, Z],
      [Z, 0]
    ],
    S: [
      [Z, Z, 0],
      [0, Z, Z]
    ],
    W: [
      [0, Z],
      [Z, Z],
      [Z, 0]
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
/* eslint-enable prettier/prettier */

export const fillRowWith = (cellTot: number) => (block: Block) => [...Array(cellTot).fill(block)];

export const BOARD_ROW_EMPTY = fillRowWith(10)(0);
export const BOARD_ROW_S = fillRowWith(10)(S);

export const BOARD_EMPTY: Board = [...Array(20).fill(BOARD_ROW_EMPTY)];
export const BOARD_HALF_I: Board = [
  ...Array(20)
    .fill(0)
    .map((_x, idx) => [...Array(10).fill(idx <= 5 ? 0 : TetroEnum.I)])
];
export const BOARD_FULL_S = [...Array(20).fill(BOARD_ROW_S)];
