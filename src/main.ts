import { TetroEnum, DirectionEnum, Board, PublicState } from './types';
import { mkInternalState, mkPublicState } from './state';
import { mkEmptyBoard } from './board';

export const main = () => {
  let posRow = 0;
  let posCell = 0;
  const b = mkEmptyBoard(20)(10);
  const t = TetroEnum.I;
  const d = DirectionEnum.N;
  setInterval(() => {
    if (posRow < b.length) {
      const internalState = mkInternalState(t)(d)(posRow)(posCell)(b);
      const publicState = mkPublicState(internalState.tetroType)(internalState.tetroOrientation)(
        internalState.posRow
      )(internalState.posCell)(internalState.board);
      console.log('hey');
      console.log(publicState.board);
      posRow++;
      console.log(posRow);
    } else {
      console.log('the end');
    }
  }, 500);
};

// npm run tsc && npx node -e "require('./dist/main.js').main()"
