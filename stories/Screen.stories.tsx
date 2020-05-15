import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { globalStylesDecorator, pageBackground } from '../src/utils/storybook';
import { Screen } from '../src/components/Screen';
import { ScreenEnum } from '../src/game/types';

storiesOf('Screen', module)
  .addDecorator(globalStylesDecorator)
  .addDecorator(pageBackground)
  .add('intro', () => <Screen screen={ScreenEnum.Intro} />)
  .add('over', () => <Screen screen={ScreenEnum.Over} />);
