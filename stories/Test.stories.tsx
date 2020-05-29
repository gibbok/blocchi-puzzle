import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { mq } from '../src/game/settings';

const TestStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: grey;
  ${mq.sm} {
    background-color: cyan;
  }
  ${mq.md} {
    background-color: yellow;
  }
  ${mq.lg} {
    background-color: orange;
  }
  ${mq.xl} {
    background-color: red;
  }
`;

function Test() {
  return <TestStyled>test</TestStyled>;
}

storiesOf('Test', module).add('test', () => <Test />);
