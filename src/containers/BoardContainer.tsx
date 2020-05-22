import { connect } from 'react-redux';
import { mkPublicState } from '../store/reducer';
import { Board } from '../components/Board';
import { InternalState, Board as BoardType } from '../game/types';

const mapStateToProps = (prevState: InternalState): { board: BoardType } => {
  const { board } = mkPublicState(prevState);
  return { board };
};

export const BoardContainer = connect(mapStateToProps)(Board);
