import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { globalStylesDecorator } from '../src/utils/storybook';
import { ScreenEnum } from '../src/game/types';
import { ScreenTransaction } from '../src/components/ScreenTransaction';
import styled from 'styled-components';

const Screen = styled.div`
  color: red;
`;

const Wrapper = styled.div`
  font-size: 4rem;
  font-family: sans-serif;
`;

const renderScreenTransaction = (defaultCurrent: ScreenEnum) => {
  const [current, setCurrent] = React.useState(defaultCurrent);
  return (
    <Wrapper>
      <button onClick={() => setCurrent(ScreenEnum.Intro)}>Intro</button>
      <button onClick={() => setCurrent(ScreenEnum.Game)}>Game</button>
      <button onClick={() => setCurrent(ScreenEnum.Over)}>Over</button>
      Default: {defaultCurrent} / Current: {current}
      <ScreenTransaction
        current={current}
        intro={<Screen>Intro</Screen>}
        game={<Screen>Game</Screen>}
        over={<Screen>Over</Screen>}
      />
    </Wrapper>
  );
};

storiesOf('ScreenTransaction', module)
  .addDecorator(globalStylesDecorator)
  .add('intro', () => renderScreenTransaction(ScreenEnum.Intro))
  .add('game', () => renderScreenTransaction(ScreenEnum.Game))
  .add('over', () => renderScreenTransaction(ScreenEnum.Over));
