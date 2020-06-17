import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { globalStylesDecorator } from '../src/utils/storybook';
import { BrowserNotSupported } from '../src/components';

storiesOf('BrowserNotSupported', module)
  .addDecorator(globalStylesDecorator)
  .add('base', () => <BrowserNotSupported />);
