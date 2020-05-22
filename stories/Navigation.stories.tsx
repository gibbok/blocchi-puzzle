import { storiesOf } from '@storybook/react';
import * as React from 'react';
import styled from 'styled-components';
import { globalStylesDecorator, pageBackground } from '../src/utils/storybook';
import { Navigation } from '../src/components/Navigation';
import { action } from '@storybook/addon-actions';

const Wrapper = styled.div`
  width: 40rem;
`;

storiesOf('Navigation', module)
  .addDecorator(globalStylesDecorator)
  .addDecorator(pageBackground)
  .add('base', () => (
    <Wrapper>
      <Navigation
        onClickLeft={action('onClickLeft')}
        onClickRight={action('onClickRight')}
        onClickDown={action('onClickDown')}
        onClickRotate={action('onClickRotate')}
      />
    </Wrapper>
  ));
