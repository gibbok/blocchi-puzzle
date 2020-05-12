import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { globalStylesDecorator, pageBackground } from '../src/utils/storybook';
import { Logo } from '../src/assets/Logo';

storiesOf('Logo', module)
  .addDecorator(globalStylesDecorator)
  .addDecorator(pageBackground)
  .add('animation', () => <Logo />);
