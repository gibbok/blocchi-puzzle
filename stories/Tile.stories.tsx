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
      <Tile variant={TetroEnum.Z} row={0} column={0} />
    </WrapperBig>
  ))
  .add('S', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.S} row={0} column={0} />
    </WrapperBig>
  ))
  .add('J', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.J} row={0} column={0} />
    </WrapperBig>
  ))
  .add('T', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.T} row={0} column={0} />
    </WrapperBig>
  ))
  .add('I', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.I} row={0} column={0} />
    </WrapperBig>
  ))
  .add('L', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.L} row={0} column={0} />
    </WrapperBig>
  ))
  .add('O', () => (
    <WrapperBig>
      <Tile variant={TetroEnum.O} row={0} column={0} />
    </WrapperBig>
  ))
  .add('none', () => (
    <WrapperBig>
      <Tile variant={NoTetro} row={0} column={0} />
    </WrapperBig>
  ))
  .add('small', () => (
    <WrapperSmall>
      <Tile variant={TetroEnum.O} row={0} column={0} />
    </WrapperSmall>
  ));
