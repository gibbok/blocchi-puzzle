import { connect } from 'react-redux';
import { mkPublicState } from '../store/reducer';
import { GameLoop } from '~components/GameLoop';
import { InternalState } from '~game/types';

const mapStateToProps = (prevState: InternalState): { level: number } => {
  const { level } = mkPublicState(prevState);
  return { level };
};

export const GameLoopContainer = connect(mapStateToProps)(GameLoop);
