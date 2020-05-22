import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import * as React from 'react';
import { globalStylesDecorator } from '../src/utils/storybook';
import { Button } from '../src/components/Button';

storiesOf('Button', module)
  .addDecorator(globalStylesDecorator)
  .add('base', () => <Button onClick={() => action('onClick')}>Click me!</Button>)
  .add('long', () => (
    <Button onClick={() => action('onClick')}>Click me! I am a very wide button!</Button>
  ));
