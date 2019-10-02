export enum DirectionEnum {
  N = 'N',
  E = 'E',
  S = 'S',
  W = 'W'
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

export type NoTetro = 0;
export type Block = NoTetro | TetroEnum;

export type TetroPieces = Record<TetroEnum, Record<DirectionEnum, Tetro>>;

export type TetroRow = readonly Block[];

export type Tetro = readonly (TetroRow)[];

export type TetroDef = Readonly<{
  type: TetroEnum;
  direction: DirectionEnum;
  x: number;
  y: number;
}>;

export const Z = TetroEnum.Z;
export const S = TetroEnum.S;
export const J = TetroEnum.J;
export const T = TetroEnum.T;
export const I = TetroEnum.I;
export const O = TetroEnum.O;

export type Position = number;

export type BoardRow = readonly Block[];

export type Board = readonly (BoardRow)[];

export type InternalState = Readonly<{
  board: Board;
  score: number;
  level: number;
  lines: number;
  currentTetro: TetroDef;
  nextTetro: TetroDef;
  isPlay: boolean;
}>;

export type PubicState = Omit<InternalState, 'currentTetro' | 'isPlay'>;

export enum KeyEnum {
  Esc = 27,
  Space = 32,
  Left = 37,
  Up = 38,
  Right = 39,
  Down = 40
}

export type CallBack = () => void;

export type Action = Readonly<{
  type: string;
}>;

export enum ActionEnum {
  MoveDown = 'MoveDown',
  MoveRight = 'MoveRight',
  MoveLeft = 'MoveLeft',
  MoveUp = 'MoveUp'
}
