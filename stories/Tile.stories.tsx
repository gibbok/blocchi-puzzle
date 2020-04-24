import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tile } from '../src/components/Tile';
import { TetroEnum, NoTetro } from '../src/game/types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
`;

storiesOf('Tile', module)
  .add('Z', () => (
    <Wrapper>
      <Tile variant={TetroEnum.Z} />
    </Wrapper>
  ))
  .add('S', () => (
    <Wrapper>
      <Tile variant={TetroEnum.S} />
    </Wrapper>
  ))
  .add('J', () => (
    <Wrapper>
      <Tile variant={TetroEnum.J} />
    </Wrapper>
  ))
  .add('T', () => (
    <Wrapper>
      <Tile variant={TetroEnum.T} />
    </Wrapper>
  ))
  .add('I', () => (
    <Wrapper>
      <Tile variant={TetroEnum.I} />
    </Wrapper>
  ))
  .add('L', () => (
    <Wrapper>
      <Tile variant={TetroEnum.L} />
    </Wrapper>
  ))
  .add('O', () => (
    <Wrapper>
      <Tile variant={TetroEnum.O} />
    </Wrapper>
  ))
  .add('none', () => (
    <Wrapper>
      <Tile variant={NoTetro} />
    </Wrapper>
  ));
