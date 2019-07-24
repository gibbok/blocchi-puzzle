import { pieces, Tetromino3x3, Tetromino } from './tetromino-piece';

enum Orientation {
    North,
    East,
    South,
    West,
}

export enum TetrominoType3x3 {
    Z = 'Z',
    S = 'S',
    J = 'J',
    T = 'T',
    I = 'I',
    O = 'O',
}
export enum TetrominoType {
    Z = 'Z',
    S = 'S',
    J = 'J',
    T = 'T',
    I = 'I',
    O = 'O',
}

const factoryTetromino = (t: TetrominoType) => (o: Orientation): Tetromino => pieces[t][o];
