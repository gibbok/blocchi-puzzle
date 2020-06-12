import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/reducer';
import { ScreenContainer } from './containers/ScreenContainer';
import GlobalStyle from './components/GlobalStyle';

export function App(): JSX.Element {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ScreenContainer />
    </Provider>
  );
}
