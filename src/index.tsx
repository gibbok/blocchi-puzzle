import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/reducer';
import { ScreenContainer } from '~containers/ScreenContainer';

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <ScreenContainer />
      </Provider>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="Jane" />, mountNode);
