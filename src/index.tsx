import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BoardContainer } from './BoardContainer';
import { Provider } from 'react-redux';
import { store } from './reducer';
interface Props {
  name: string;
}

class App extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <div>
          Hello {this.props.name}
          <div>
            <BoardContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="Jane" />, mountNode);
