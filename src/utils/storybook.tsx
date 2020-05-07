import React from 'react';
import GlobalStyle from '../components/GlobalStyle';

export const globalStylesDecorator = (story: () => unknown) => (
  <React.Fragment>
    <GlobalStyle />
    {story()}
  </React.Fragment>
);
