import * as React from 'react';
import { TetroDef, Board } from './types';
import { connect } from 'react-redux';

type BoardAndCurrentTetro = Readonly<{ board: Board; currentTetro: TetroDef }>;

const Board = ({ board, currentTetro }: BoardAndCurrentTetro) => (
  <div>
    {JSON.stringify(board)}
    {JSON.stringify(currentTetro)}
  </div>
);

const mapStateToProps = ({ board, currentTetro }: BoardAndCurrentTetro) => ({
  board,
  currentTetro
});

export const BoardContainer = connect(mapStateToProps)(Board);
