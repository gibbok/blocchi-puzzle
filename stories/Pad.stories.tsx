import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { globalStylesDecorator, pageBackground } from '../src/utils/storybook';
import { Pad, PadRotate, PadDown, PadLeft, PadRight } from '../src/components/Pad';
import { action } from '@storybook/addon-actions';

const onClick = action('onClick');

storiesOf('Pad', module)
  .addDecorator(globalStylesDecorator)
  .addDecorator(pageBackground)
  .add('base', () => <Pad icon="" onClick={onClick} />)
  .add('left', () => <PadLeft onClick={onClick} />)
  .add('right', () => <PadRight onClick={onClick} />)
  .add('down', () => <PadDown onClick={onClick} />)
  .add('rotate', () => <PadRotate onClick={onClick} />);
