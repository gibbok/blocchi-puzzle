import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Tile } from '../src/components/Tile';
import { TetroEnum, NoTetro } from '../src/game/types';
import styled from 'styled-components';
import { globalStylesDecorator } from '../src/utils/storybook';

const WrapperBig = styled.div`
  width: 48rem;
  height: 48rem;
`;

const WrapperSmall = styled.div`
  width: 2rem;
  height: 2rem;
`;

storiesOf('Tile', module)
  .addDecorator(globalStylesDecorator)
  .add('Z', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.Z} />
    </WrapperBig>
  ))
  .add('S', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.S} />
    </WrapperBig>
  ))
  .add('J', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.J} />
    </WrapperBig>
  ))
  .add('T', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.T} />
    </WrapperBig>
  ))
  .add('I', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.I} />
    </WrapperBig>
  ))
  .add('L', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.L} />
    </WrapperBig>
  ))
  .add('O', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.O} />
    </WrapperBig>
  ))
  .add('none', () => (
    <WrapperBig>
      <Tile variant={NoTetro} />
    </WrapperBig>
  ))
  .add('small', () => (
    <WrapperSmall>
      <Tile variant={TetroEnum.O} />
    </WrapperSmall>
  ));
