import renderer from 'react-test-renderer';
import React from 'react';
import { GsapControls } from './GsapControls';

describe('GsapControls', () => {
  it('should render', () => {
    const tree = renderer.create(
      <GsapControls>
        <div>test</div>
      </GsapControls>
    );
    expect(tree).toMatchSnapshot();
  });
});
