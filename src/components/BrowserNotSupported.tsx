import React from 'react';
import styled from 'styled-components';

const BrowserNotSupportedStyled = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: 'Oleo Script', cursive;
  color: #442217;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;

const Main = styled.div`
  font-size: 5rem;
`;

const Sub = styled.div`
  font-size: 3rem;
`;

export function BrowserNotSupported(): JSX.Element {
  return (
    <BrowserNotSupportedStyled>
      <Main>Browser not supported! 😱</Main>
      <Sub>Please use the latest Chrome or Firefox.</Sub>
    </BrowserNotSupportedStyled>
  );
}
