import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { globalStylesDecorator } from '../src/utils/storybook';
import { ScreenEnum } from '../src/game/types';
import { ScreenTransaction } from '../src/components/ScreenTransaction';
import styled from 'styled-components';

const Screen = styled.div``;

const renderScreenTransaction = (current: ScreenEnum) => (
  <ScreenTransaction
    current={current}
    intro={<Screen>Intro</Screen>}
    game={<Screen>Game</Screen>}
    over={<Screen>Over</Screen>}
  />
);

storiesOf('ScreenTransaction', module)
  .addDecorator(globalStylesDecorator)
  .add('intro', () => renderScreenTransaction(ScreenEnum.Intro))
  .add('game', () => renderScreenTransaction(ScreenEnum.Game))
  .add('over', () => renderScreenTransaction(ScreenEnum.Over));
