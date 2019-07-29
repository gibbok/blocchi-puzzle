export enum DirectionEnum {
  N = 'N',
  E = 'E',
  S = 'S',
  W = 'W'
}
export enum TetroEnum {
  Z = 'Z',
  S = 'S',
  J = 'J',
  T = 'T',
  I = 'I',
  O = 'O'
}
export type Cell = 0 | TetroEnum;
export type TetroPieces = Record<TetroEnum, Record<DirectionEnum, Tetro>>;
export type TetroRow = readonly Cell[];
export type Tetro = readonly (TetroRow)[];
export const Z = TetroEnum.Z;
export const S = TetroEnum.S;
export const J = TetroEnum.J;
export const T = TetroEnum.T;
export const I = TetroEnum.I;
export const O = TetroEnum.O;

export type Position = Readonly<{
  x: number;
  y: number;
}>;

export type BoardRow = readonly Cell[];
export type Board = readonly (BoardRow)[];
