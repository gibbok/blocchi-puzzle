import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/reducer';
import { ScreenContainer } from './containers/ScreenContainer';
import GlobalStyle from './components/GlobalStyle';
import { detectorBrowser } from '../src/utils';
import { BrowserNotSupported } from './components';
import { detect } from 'detect-browser';

export function App(): JSX.Element {
  const browser = detect();
  const browserInfo =
    browser && browser.name && browser.version
      ? { name: browser.name, version: browser.version }
      : undefined;
  const isValidBrowser = detectorBrowser(browserInfo);

  return (
    <Provider store={store}>
      <GlobalStyle />
      {isValidBrowser ? <ScreenContainer /> : <BrowserNotSupported />}
    </Provider>
  );
}
