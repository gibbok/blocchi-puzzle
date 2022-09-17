// Tetromino
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

// Board related
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

// Game state
export type InternalState = Readonly<{
  board: Board;
  score: number;
  level: number;
  lines: number;
  currentTetro: TetroDef;
  nextTetro: TetroDef;
  isPlay: boolean;
  isGameOver: boolean;
  screen: ScreenEnum;
}>;

export type PublicState = Omit<InternalState, 'currentTetro' | 'isPlay' | 'isGameOver'>;

// User interaction
export enum KeyEnum {
  Space = 'Space',
  Left = 'ArrowLeft',
  Up = 'ArrowUp',
  Right = 'ArrowRight',
  Down = 'ArrowDown',
  KeyW = 'KeyW',
  KeyS = 'KeyS',
  KeyA = 'KeyA',
  KeyD = 'KeyD',
}

// Utilities
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

export type BrowserInfo = Readonly<{
  name: string;
  version: string;
}>;
