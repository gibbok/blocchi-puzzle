import { Board as BoardType, InternalState } from '~game/types';
import { connect } from 'react-redux';
import { mkPublicState } from '~store/reducer';
import { Board } from '~components';

const mapStateToProps = (state: InternalState): { board: BoardType } => {
  const { board } = mkPublicState(state);
  return { board };
};

export const BoardContainer = connect(mapStateToProps)(Board);
