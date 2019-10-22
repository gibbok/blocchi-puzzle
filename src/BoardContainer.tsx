import { Board as BoardType, InternalState } from './types';
import { connect } from 'react-redux';
import { mkPublicState } from './reducer';
import { Board } from './component/Board';

const mapStateToProps = (state: InternalState): { board: BoardType } => {
  const { board } = mkPublicState(state);
  return { board };
};

export const BoardContainer = connect(mapStateToProps)(Board);
