import renderer from 'react-test-renderer';
import GlobalStyle from './GlobalStyle';
import React from 'react';

describe('GlobalStyle', () => {
  it('renders properly', () => {
    renderer.create(<GlobalStyle />);
    expect(document.head).toMatchSnapshot();
  });
});
