import { connect } from 'react-redux';
import { mkPublicState } from '../store/reducer';
import { GameLoop } from '~components/GameLoop';
import { InternalState } from '~game/types';
import { moveDownThunk } from '~store/board/actions/thunks';

const cb = moveDownThunk;

const mapStateToProps = (prevState: InternalState): { level: number; cb: () => void } => {
  const { level } = mkPublicState(prevState);
  return { level, cb };
};

export const GameLoopContainer = connect(mapStateToProps)(GameLoop);
