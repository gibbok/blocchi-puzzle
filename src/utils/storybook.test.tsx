import React from 'react';
import { globalStylesDecorator, pageBackground } from './storybook';
import renderer from 'react-test-renderer';

describe('storybook', () => {
  describe('globalStylesDecorator', () => {
    it('should render story with global styles in document head', () => {
      const tree = renderer.create(globalStylesDecorator(() => <div>test</div>));
      expect(document.head).toMatchSnapshot();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('pageBackground', () => {
    it('should render story within a wrapper element with background image', () => {
      const tree = renderer.create(pageBackground(() => <div>test</div>));
      expect(tree).toMatchSnapshot();
    });
  });
});
