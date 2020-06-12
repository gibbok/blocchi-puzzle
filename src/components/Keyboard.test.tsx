import { handleKeydown, Keyboard } from './Keyboard';
import { KeyEnum } from '../game/types';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { mockStore, mkDkr } from '../utils';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

const dispatchEvent = (key: KeyEnum) => {
  document.dispatchEvent(
    new KeyboardEvent('keydown', {
      code: key,
      bubbles: true,
    })
  );
};

describe('Keyboard', () => {
  const dkr = mkDkr(false);

  describe('handleKeydown', () => {
    const up = jest.fn();
    const right = jest.fn();
    const down = jest.fn();
    const left = jest.fn();

    it('should execute up callback', () => {
      handleKeydown(dkr, up, right, down, left)(KeyEnum.Up, false);
      expect(up).toHaveBeenCalled();
    });

    it('should execute right callback', () => {
      handleKeydown(dkr, up, right, down, right)(KeyEnum.Right, false);
      expect(right).toHaveBeenCalled();
    });

    it('should execute down callback', () => {
      handleKeydown(dkr, up, right, down, down)(KeyEnum.Down, false);
      expect(down).toHaveBeenCalled();
    });

    it('should execute left callback', () => {
      handleKeydown(dkr, up, right, down, left)(KeyEnum.Left, false);
      expect(left).toHaveBeenCalled();
    });
  });

  describe('<Keyboard />', () => {
    const store = mockStore();
    const tree = renderer.create(
      <Provider store={store}>
        <Keyboard detectionKeyRepeat={dkr} />
      </Provider>
    );
    let container: HTMLElement | null;
    let mockUseEffect: jest.SpyInstance;

    beforeAll(() => {
      mockUseEffect = jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect);
    });

    afterAll(() => {
      mockUseEffect.mockRestore();
    });

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    afterEach(() => {
      if (container) {
        document.body.removeChild(container);
        container = null;
      }
    });

    it('should not render any dom', () => {
      tree.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('should listen to events keydown and keyup execute appropriate actions', () => {
      const store = mockStore(true);
      const dkr = mkDkr(false);

      act(() => {
        ReactDOM.render(
          <Provider store={store}>
            <Keyboard detectionKeyRepeat={dkr} />
          </Provider>,
          container
        );

        dispatchEvent(KeyEnum.Up);
        dispatchEvent(KeyEnum.Right);
        dispatchEvent(KeyEnum.Left);
        dispatchEvent(KeyEnum.Down);

        const actions = store.getActions();
        const expectedPayload = [
          { type: 'game/moveUp', paylaod: undefined },
          { type: 'game/moveRight', paylaod: undefined },
          { type: 'game/moveLeft', paylaod: undefined },
          { type: 'game/moveDown', paylaod: undefined },
          { type: 'game/checkBoard', payload: undefined },
          { type: 'game/gameOver', payload: undefined },
        ];

        expect(actions).toEqual(expectedPayload);

        document.dispatchEvent(new KeyboardEvent('keyup', { bubbles: true }));

        expect(dkr.get()).toBeFalsy();
      });
    });
  });
});
