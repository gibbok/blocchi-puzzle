import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/reducer';
import { ScreenContainer } from './containers/ScreenContainer';
import GlobalStyle from './components/GlobalStyle';

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <ScreenContainer />
      </Provider>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="Jane" />, mountNode);
