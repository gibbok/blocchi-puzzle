import { connect } from 'react-redux';
import { mkPublicState } from '../store/reducer';
import { Score } from '../components/Score';
import { InternalState } from '../game/types';

const mapStateToProps = (prevState: InternalState): { score: number; level: number } => {
  const { score, level } = mkPublicState(prevState);
  return { score, level };
};

export const ScoreContainer = connect(mapStateToProps)(Score);
