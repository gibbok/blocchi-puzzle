import { InternalState, TetroEnum, DirectionEnum } from '../game/types';
import { connect } from 'react-redux';
import { mkPublicState } from '../store/reducer';
import { Next } from '../components/Next';

type Out = Readonly<{
  type: TetroEnum;
  direction: DirectionEnum;
}>;

export const mapStateToProps = (prevState: InternalState): Out => {
  const {
    nextTetro: { type, direction },
  } = mkPublicState(prevState);
  return { type, direction };
};

export const NextContainer = connect(mapStateToProps)(Next);
