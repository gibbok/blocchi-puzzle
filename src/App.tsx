import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/reducer';
import { ScreenContainer } from './containers/ScreenContainer';
import GlobalStyle from './components/GlobalStyle';
import { detectorBrowser } from '../src/utils';
import { BrowserNotSupported } from './components';
import { detect } from 'detect-browser';
import { AppContextType, AppContextProvider } from './context';
import { BrowserInfo } from './game/types';

export function App(): JSX.Element {
  const browser = detect();
  const browserInfo: BrowserInfo | undefined =
    browser && browser.name && browser.version
      ? { name: browser.name, version: browser.version }
      : undefined;
  const isValidBrowser = detectorBrowser(browserInfo);

  const handleSetRepeat = (repeat: boolean) =>
    setAppState((s) => ({
      ...s,
      repeat,
    }));

  const defaultContext: AppContextType = {
    browserInfo: browserInfo,
    repeat: false,
    setRepeat: handleSetRepeat,
  };

  const [appState, setAppState] = React.useState<AppContextType>(defaultContext);

  return (
    <AppContextProvider value={appState}>
      <Provider store={store}>
        <GlobalStyle />
        {isValidBrowser ? <ScreenContainer /> : <BrowserNotSupported />}
      </Provider>
    </AppContextProvider>
  );
}
