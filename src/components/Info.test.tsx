import React from 'react';
import { Info } from './Info';
import renderer from 'react-test-renderer';

describe('<Info />', () => {
  it('should render Info', () => {
    const tree = renderer.create(<Info score={100} level={1} lines={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
