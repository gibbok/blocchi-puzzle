import { KeyEnum, CallBack as Cb } from './types';

export const keyDown = (
  keyCode: KeyEnum,
  isPlay: boolean,
  fnUp: Cb,
  fnRight: Cb,
  fnDown: Cb,
  fnLeft: Cb,
  fnEsc: Cb,
  fnSpace: Cb
): void => {
  if (isPlay) {
    switch (keyCode) {
      case KeyEnum.Up:
        fnUp();
        break;
      case KeyEnum.Right:
        fnRight();
        break;
      case KeyEnum.Down:
        fnDown();
        break;
      case KeyEnum.Left:
        fnLeft();
        break;
      case KeyEnum.Esc:
        fnEsc();
        break;
    }
  } else if (!isPlay && keyCode === KeyEnum.Space) {
    fnSpace();
  }
};
