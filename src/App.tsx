import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/reducer';
import { ScreenContainer } from './containers/ScreenContainer';
import GlobalStyle from './components/GlobalStyle';
import { detectorBrowser } from '../src/utils';
import { BrowserNotSupported } from './components';

export function App(): JSX.Element {
  const isValidBrowser = detectorBrowser();
  console.log(isValidBrowser);
  return (
    <Provider store={store}>
      <GlobalStyle />
      {isValidBrowser ? <ScreenContainer /> : <BrowserNotSupported />}
    </Provider>
  );
}

// export function App(): JSX.Element {
//   const isValidBrowser = detectorBrowser();
//   return (
//     <>
//       {isValidBrowser ? (
//         <Provider store={store}>
//           <GlobalStyle />
//           <ScreenContainer />
//         </Provider>
//       ) : (
//         <BrowserNotSupported />
//       )}
//     </>
//   );
// }
