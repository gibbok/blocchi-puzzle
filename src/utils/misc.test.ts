import { getRandomValueFromStringEnum, noop } from './misc';
import { stub } from 'sinon';

describe('misc', () => {
  beforeAll(() => stub(Math, 'random').returns(0));
  afterAll(() => stub().restore());

  describe('getRandomValueFromStringEnum', () => {
    it('should return a random value from String enum', () => {
      enum Test {
        A = 'a',
        B = 'b',
      }
      const result = getRandomValueFromStringEnum(Test)();
      expect(result).toBe('a');
    });
  });

  describe('noop', () => {
    it('should return noop', () => {
      expect(noop()).toBeUndefined();
    });
  });
});
