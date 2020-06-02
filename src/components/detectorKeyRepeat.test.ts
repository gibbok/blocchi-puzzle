import { detectorKeyRepeat } from './detectorKeyRepeat';

const d = detectorKeyRepeat;

describe('detectorKeyRepeat', () => {
  it('should get default value after module was loaded', () => {
    expect(d.get()).toBe(false);
  });

  it('should set and get a new  value when user keep pressing a key', () => {
    expect(d.set(true)).toBe(true);
  });
});
