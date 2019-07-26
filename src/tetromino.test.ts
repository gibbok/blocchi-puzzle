import { factoryTetro } from './tetromino';
import { Z, NO, ES, SO, WE, S, J, T, O, I, TetroEnum, Orientation, Tetro, TetroPos } from './types';

/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const pieces: Record<TetroEnum, readonly Tetro[]> = {
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
    ]
  ],
  I: [
    [
      [0, I, 0, 0],
      [0, I, 0, 0],
      [0, I, 0, 0],
      [0, I, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [I, I, I, I],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, I, 0],
      [0, 0, I, 0],
      [0, 0, I, 0],
      [0, 0, I, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [I, I, I, I],
      [0, 0, 0, 0]
    ]
  ],
  O: [
    [
      [0, 0, 0, 0],
      [0, O, O, 0],
      [0, O, O, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, O, O, 0],
      [0, O, O, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, O, O, 0],
      [0, O, O, 0],
      [0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0],
      [0, O, O, 0],
      [0, O, O, 0],
      [0, 0, 0, 0]
    ]
  ]
};

describe('tetromino', () => {
  describe('factoryTetro', () => {
    Object.keys(TetroEnum).forEach((t:string) => pieces[t as TetroEnum].forEach((d:Tetro, o:Orientation) => {
      test(`tetro ${t} ${o}`,
        () => expect(d)
          .toEqual(
            factoryTetro({ x: 0, y: 0 })(t as TetroEnum)(o as Orientation).tetromino)

          )
    }))
  })
})

