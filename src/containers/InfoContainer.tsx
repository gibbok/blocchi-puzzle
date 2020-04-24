import { connect } from 'react-redux';
import { mkPublicState } from '../store/reducer';
import { Info } from '../components/Info';
import { InternalState } from '~game/types';

const mapStateToProps = (
  prevState: InternalState
): { score: number; level: number; lines: number } => {
  const { score, level, lines } = mkPublicState(prevState);
  return { score, level, lines };
};

export const InfoContainer = connect(mapStateToProps)(Info);
