export enum Orientation {
    North,
    East,
    South,
    West,
}

export enum TetrominoEnum {
    Z = 'Z',
    S = 'S',
    J = 'J',
    T = 'T',
    I = 'I',
    O = 'O',
}

export type Cell = 0 | TetrominoEnum;

export type Tetromino = readonly (readonly Cell[])[];
