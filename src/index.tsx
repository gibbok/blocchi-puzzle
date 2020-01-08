import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BoardContainer } from './containers/BoardContainer';
import { store } from './store/reducer';
import { Keyboard } from './components/Keyboard';

interface Props {
  name: string;
}

class App extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <Keyboard />
        <BoardContainer />
      </Provider>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="Jane" />, mountNode);
