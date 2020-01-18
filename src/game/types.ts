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
  L = 'L',
  O = 'O'
}

export enum NoTetroEnum {
  NoTetro
}
export const NoTetro = NoTetroEnum.NoTetro;

export type Tile = NoTetroEnum.NoTetro | TetroEnum;

export type TetroPieces = Record<TetroEnum, Record<DirectionEnum, Tetro>>;

export type TetroRow = readonly Tile[];

export type Tetro = readonly TetroRow[];

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
export const L = TetroEnum.L;
export const O = TetroEnum.O;

export type Position = number;

export type BoardRow = readonly Tile[];

export type Board = readonly BoardRow[];

export enum ScreenEnum {
  Intro,
  Game,
  Over
}

export type InternalState = Readonly<{
  board: Board;
  score: number; // some point based on lines done
  level: number; // based on score, every 1000 score you go to next level, speed is faster
  lines: number; // number of lines done
  currentTetro: TetroDef;
  nextTetro: TetroDef;
  isPlay: boolean;
  isGameOver: boolean;
  screen: ScreenEnum;
}>;

export type PubicState = Omit<InternalState, 'currentTetro' | 'isPlay' | 'isGameOver' | 'screen'>;

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
