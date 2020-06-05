import { mapStateToProps, InfoContainer } from './InfoContainer';
import { TetroEnum } from '../game/types';
import { mkInitialState } from '../store';
import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import { mockStore } from '../utils';

// http://rahulgaba.com/front-end/2018/10/19/unit-testing-redux-containers-the-better-way-using-jest.html
// https://www.robinwieruch.de/react-connected-component-test
describe('<InfoContainer />', () => {
  it('should mapStateToProps correctly', () => {
    const input = mkInitialState(TetroEnum.I, TetroEnum.J);
    const output = mapStateToProps(input);
    const result = { score: 0, level: 1, lines: 0 };

    expect(output).toMatchObject(result);
  });

  it('should render correctly', () => {
    const store = mockStore();
    const withProvider = (
      <Provider store={store}>
        <InfoContainer />
      </Provider>
    );
    const component = renderer.create(withProvider);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
