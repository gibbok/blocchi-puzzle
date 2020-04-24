import { InternalState, TetroDef } from '~game/types';
import { connect } from 'react-redux';
import { mkPublicState } from '~store/reducer';
import { Next } from '~components/Next';

const mapStateToProps = (prevState: InternalState): { nextTetro: TetroDef } => {
  const { nextTetro } = mkPublicState(prevState);
  return { nextTetro };
};

export const NextContainer = connect(mapStateToProps)(Next);
