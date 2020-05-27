export enum DirectionEnum {
  N = 'N',
  E = 'E',
  S = 'S',
  W = 'W',
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
  O = 'O',
}

export enum NoTetroEnum {
  NoTetro,
}
export const NoTetro = NoTetroEnum.NoTetro;

export type Tile = NoTetroEnum.NoTetro | TetroEnum;

export type TetroPieces = Record<TetroEnum, Record<DirectionEnum, Tetro>>;

export type TetroRow = readonly Tile[];

// The tetromino, a geometric shape composed of four squares/tiles
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

export type BoardMutable = Tile[][];

// This is the space on which the game is played.
// Tetriminos fall from the top of the Board, and then players turn and move them into their desired places at the bottom.
export type Board = readonly BoardRow[];

export enum ScreenEnum {
  Intro = 'Intro',
  Game = 'Game',
  Over = 'Over',
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

export type PublicState = Omit<InternalState, 'currentTetro' | 'isPlay' | 'isGameOver'>;

export enum KeyEnum {
  Esc = 27,
  Space = 32,
  Left = 37,
  Up = 38,
  Right = 39,
  Down = 40,
}

export type CallBack = () => void;

export type Action = Readonly<{
  type: string;
}>;

export type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited';
export interface TransitionStyles {
  entering?: React.CSSProperties;
  entered?: React.CSSProperties;
  exiting?: React.CSSProperties;
  exited?: React.CSSProperties;
}
