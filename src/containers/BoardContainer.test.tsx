import { mapStateToProps, BoardContainer } from './BoardContainer';
import { TetroEnum, I } from '../game/types';
import { mkInitialState } from '../store';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import { BOARD_ROW_EMPTY } from '../utils';

describe('<BoardContainer />', () => {
  it('should mapStateToProps correctly', () => {
    const input = mkInitialState(TetroEnum.I, TetroEnum.J);
    const output = mapStateToProps(input);
    const result = {
      board: [
        [0, 0, 0, 0, I, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, I, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, I, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, I, 0, 0, 0, 0, 0],
        ...Array(16).fill(BOARD_ROW_EMPTY),
      ],
    };

    expect(output).toMatchObject(result);
  });

  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const initialState = mkInitialState(TetroEnum.I, TetroEnum.J);
    const store = mockStore(initialState);
    const withProvider = (
      <Provider store={store}>
        <BoardContainer />
      </Provider>
    );
    const component = renderer.create(withProvider);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
