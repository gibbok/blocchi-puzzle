import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tile } from '../src/components/Tile';
import { TetroEnum } from '../src/game/types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
`;

storiesOf('Tile', module).add('I', () => (
  <Wrapper>
    <Tile variant={TetroEnum.I} />
  </Wrapper>
));
