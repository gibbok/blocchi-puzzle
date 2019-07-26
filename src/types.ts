export enum DirectionEnum {
  N,
  E,
  S,
  W
}

export const NO = DirectionEnum.N;
export const ES = DirectionEnum.E;
export const SO = DirectionEnum.S;
export const WE = DirectionEnum.W;

export enum TetroEnum {
  Z = 'Z',
  S = 'S',
  J = 'J',
  T = 'T',
  I = 'I',
  O = 'O'
}

export const Z = TetroEnum.Z;
export const S = TetroEnum.S;
export const J = TetroEnum.J;
export const T = TetroEnum.T;
export const I = TetroEnum.I;
export const O = TetroEnum.O;

export type Cell = 0 | TetroEnum;

export type Tetro = readonly (readonly Cell[])[];

export type Position = Readonly<{
  x: number;
  y: number;
}>;

export type TetroPos = Readonly<{
  tetro: Tetro;
  pos: Position;
}>;
