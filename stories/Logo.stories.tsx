import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { globalStylesDecorator } from '../src/utils/storybook';
import { Logo } from '../src/assets/Logo';

storiesOf('Logo', module)
  .addDecorator(globalStylesDecorator)
  .add('animation', () => <Logo />);
