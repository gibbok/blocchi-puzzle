import React from 'react';
import { useAppContextConsumer, AppContextProvider } from './context';
import { mockContext } from './utils';
import renderer from 'react-test-renderer';
import { act } from 'react-dom/test-utils';
import ReactDOM from 'react-dom';

function TestComp(): JSX.Element {
  const { repeat, browserInfo, setRepeat } = useAppContextConsumer();
  return (
    <div>
      {JSON.stringify({
        repeat,
        browserInfo,
      })}
      <button type="button" onClick={() => setRepeat(true)}>
        Click me!
      </button>
    </div>
  );
}

describe('context', () => {
  let container: Element | null;

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
  it('should use AppContextProvider', () => {
    const context = mockContext();
    const tree = renderer
      .create(
        <AppContextProvider value={context}>
          <TestComp />
        </AppContextProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should throw an exception if not used with an app context consumer', () => {
    let exception;
    try {
      const tree = renderer.create(<TestComp />);
      tree.toJSON;
    } catch (err) {
      exception = err;
    }

    expect(exception.message).toBe('useContext must be inside a Provider with a value');
  });

  it('should call setRepeat', () => {
    act(() => {
      const context = mockContext();
      ReactDOM.render(
        <AppContextProvider value={context}>
          <TestComp />
        </AppContextProvider>,
        container
      );
      container?.querySelector('button')?.click();
      const hasRepeatChanged = container?.innerHTML.search('true');

      expect(hasRepeatChanged).toBeTruthy();
    });
  });
});
