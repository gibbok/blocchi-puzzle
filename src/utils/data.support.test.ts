/* eslint-disable prettier/prettier */
import { mkEmptyRow, mkRow } from '../game';
import { TetroPieces, Z, S, J, T, I, L, O, BoardRow, Board, TetroEnum } from '~game/types';

export const dataPieces: TetroPieces = {
  Z: {
    N: [
      [Z, Z, 0],
      [0, Z, Z]
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
      [S, S, 0]
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
      [J, J, J]
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
      [0, T],
      [T, T],
      [0, T]
    ],
    S: [
      [0, T, 0],
      [T, T, T]
    ],
    W: [
      [T, 0],
      [T, T],
      [T, 0]
    ]
  },
  I: {
    N: [
      [0, I, 0, 0],
      [0, I, 0, 0],
      [0, I, 0, 0],
      [0, I, 0, 0]
    ],
    E: [
      [0, 0, 0, 0],
      [I, I, I, I],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    S: [
      [0, I, 0, 0],
      [0, I, 0, 0],
      [0, I, 0, 0],
      [0, I, 0, 0]
    ],
    W: [
      [0, 0, 0, 0],
      [I, I, I, I],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  },
  L: {
    N: [
      [L, 0],
      [L, 0],
      [L, L]
    ],
    E: [
      [L, L, L],
      [L, 0, 0]
    ],
    S: [
      [L, L],
      [0, L],
      [0, L]
    ],
    W: [
      [0, 0, L],
      [L, L, L]
    ]
  },
  O: {
    N: [
      [O, O],
      [O, O]
    ],
    E: [
      [O, O],
      [O, O]
    ],
    S: [
      [O, O],
      [O, O]
    ],
    W: [
      [O, O],
      [O, O]
    ]
  }
};
/* eslint-enable prettier/prettier */

export const BOARD_ROW_EMPTY: BoardRow = mkEmptyRow;
export const BOARD_ROW_S: BoardRow = mkRow(10, S);

export const BOARD_EMPTY: Board = [...Array(20).fill(BOARD_ROW_EMPTY)];

export const mkBoardHalfTetroY = (t: TetroEnum): Board => [
  ...Array(20)
    .fill(0)
    .map((_x, idx) => [...Array(10).fill(idx <= 5 ? 0 : t)])
];

export const BOARD_HALF_I_Y: Board = mkBoardHalfTetroY(TetroEnum.I);
export const BOARD_HALF_S_Y: Board = mkBoardHalfTetroY(TetroEnum.S);
export const BOARD_HALF_S_X: Board = [...Array(20).fill([0, 0, 0, 0, 0, S, S, S, S, S])];
export const BOARD_HALF_S_X_REV: Board = [...Array(20).fill([S, S, S, S, S, 0, 0, 0, 0, 0])];
export const BOARD_RANDOM_S_1: Board = [
  ...Array(10).fill(BOARD_ROW_EMPTY),
  [0, 0, 0, 0, 0, I, I, I, I, I],
  [0, 0, 0, 0, S, S, S, S, S, S],
  [0, 0, 0, S, S, S, S, S, S, S],
  [0, 0, S, S, S, S, S, S, S, S],
  [0, 0, J, J, J, J, J, J, J, J],
  [I, I, S, S, S, S, S, S, S, S],
  [I, I, S, S, S, S, S, S, S, S],
  [0, 0, Z, Z, Z, Z, Z, Z, Z, Z],
  [S, S, S, S, S, S, S, S, S, S],
  [S, S, S, S, S, S, S, S, S, S]
];

export const BOARD_FULL_S: Board = [...Array(20).fill(BOARD_ROW_S)];
