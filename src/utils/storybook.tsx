import React from 'react';
import GlobalStyle from '../components/GlobalStyle';
import styled from 'styled-components';
import { wood } from '../assets/images';

export const globalStylesDecorator = (story: () => unknown) => (
  <React.Fragment>
    <GlobalStyle />
    {story()}
  </React.Fragment>
);

const Bkg = styled.div`
  background-image: url(${wood});
  width: 100vw;
  height: 100vh;
`;

export const pageBackground = (story: () => React.ReactNode) => <Bkg>{story()}</Bkg>;
