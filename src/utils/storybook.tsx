import React from 'react';
import GlobalStyle from '../components/GlobalStyle';
import styled from 'styled-components';
import { wood } from '../assets/images';

/**
 * Decorate a story with glocal styles.
 * @param story Story
 */
export const globalStylesDecorator = (story: () => unknown): JSX.Element => (
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

/**
 * Decorate a story with a page background.
 * @param story Story
 */
export const pageBackground = (story: () => React.ReactNode): JSX.Element => <Bkg>{story()}</Bkg>;
