import * as React from 'react';
import { Board, InternalState } from './types';
import { connect } from 'react-redux';
import { mkPublicState } from './reducer';

const Board = (board: Board) => <div>{JSON.stringify(board)}</div>;

const mapStateToProps = (state: InternalState): Board => {
  const { board } = mkPublicState(state);
  return board;
};

export const BoardContainer = connect(mapStateToProps)(Board);
