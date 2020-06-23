import React from 'react';
import { useAppContextConsumer, AppContextProvider } from './context';
import { mockContext } from './utils';
import renderer from 'react-test-renderer';

function TestComp(): JSX.Element {
  const { repeat, browserInfo, setRepeat } = useAppContextConsumer();
  return (
    <div>
      {JSON.stringify({
        repeat,
        browserInfo,
      })}
    </div>
  );
}

describe('context', () => {
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
});
