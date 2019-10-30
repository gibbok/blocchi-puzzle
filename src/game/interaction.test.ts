import { keyDown, KeyEnum } from './';

const FN_UP = jest.fn();
const FN_RIGHT = jest.fn();
const FN_DOWN = jest.fn();
const FN_LEFT = jest.fn();
const FN_ESC = jest.fn();
const FN_SPACE = jest.fn();

describe('interaction', () => {
  describe('keyDown', () => {
    it('should call `fnUp` cb when key Up is pressed', () => {
      keyDown(KeyEnum.Up, true, FN_UP, FN_RIGHT, FN_DOWN, FN_LEFT, FN_ESC, FN_SPACE);
      expect(FN_UP).toHaveBeenCalled();
      expect(FN_RIGHT).not.toHaveBeenCalled();
      expect(FN_DOWN).not.toHaveBeenCalled();
      expect(FN_LEFT).not.toHaveBeenCalled();
      expect(FN_ESC).not.toHaveBeenCalled();
      expect(FN_SPACE).not.toHaveBeenCalled();
    });

    it('should call `fnRight` cb when key Right is pressed', () => {
      keyDown(KeyEnum.Right, true, FN_UP, FN_RIGHT, FN_DOWN, FN_LEFT, FN_ESC, FN_SPACE);
      expect(FN_UP).not.toHaveBeenCalled();
      expect(FN_RIGHT).toHaveBeenCalled();
      expect(FN_DOWN).not.toHaveBeenCalled();
      expect(FN_LEFT).not.toHaveBeenCalled();
      expect(FN_ESC).not.toHaveBeenCalled();
      expect(FN_SPACE).not.toHaveBeenCalled();
    });
  });
});
