import React from 'react';
import { Navigation } from './Navigation';
import renderer from 'react-test-renderer';
import { noop } from '../utils';
import { PadLeft, PadRight, PadDown, PadRotate } from './Pad';

describe('<Navigation />', () => {
  const left = jest.fn();
  const right = jest.fn();
  const down = jest.fn();
  const rotate = jest.fn();

  const tree = renderer.create(
    <Navigation onClickLeft={left} onClickRight={right} onClickDown={down} onClickRotate={rotate} />
  );
  const instance = tree.root;

  it('should render Navigation', () => {
    tree.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('it should execute left callback on click', () => {
    const pad = instance?.findByType(PadLeft);
    pad.props.onClick();
    expect(left).toBeCalled();
  });

  it('it should execute right callback on click', () => {
    const pad = instance?.findByType(PadRight);
    pad.props.onClick();
    expect(right).toBeCalled();
  });

  it('it should execute down callback on click', () => {
    const pad = instance?.findByType(PadDown);
    pad.props.onClick();
    expect(down).toBeCalled();
  });

  it('it should execute rotate callback on click', () => {
    const pad = instance?.findByType(PadRotate);
    pad.props.onClick();
    expect(rotate).toBeCalled();
  });
});
