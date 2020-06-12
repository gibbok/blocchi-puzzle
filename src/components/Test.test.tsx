import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { Test } from './Test';

describe('test', () => {
  jest.useFakeTimers();
  it('should xx', () => {
    act(() => {
      const tree = renderer.create(<Test />);

      jest.advanceTimersByTime(0);
      expect(tree).toMatchSnapshot();

      jest.advanceTimersByTime(5000);
      expect(tree).toMatchSnapshot();

      jest.advanceTimersByTime(10000);
      expect(tree).toMatchSnapshot();
    });
  });
});
