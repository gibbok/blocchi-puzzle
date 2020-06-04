import { InternalState, ScreenEnum } from '../game/types';
import { connect } from 'react-redux';
import { mkPublicState } from '../store/reducer';
import { Screen } from '../components';

export const mapStateToProps = (state: InternalState): { screen: ScreenEnum } => {
  const { screen } = mkPublicState(state);
  return { screen };
};

export const ScreenContainer = connect(mapStateToProps)(Screen);
