import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { globalStylesDecorator, pageBackground } from '../src/utils/storybook';
import { Logo } from '../src/assets/Logo';
import { GsapControls } from '../src/components/GsapControls';

storiesOf('Logo', module)
  .addDecorator(globalStylesDecorator)
  .addDecorator(pageBackground)
  .add('animation', () => (
    <GsapControls>
      <Logo />
    </GsapControls>
  ));
