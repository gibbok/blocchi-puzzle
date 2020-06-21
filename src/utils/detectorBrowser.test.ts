import { detectorBrowser } from './detectorBrowser';
describe('detectorBrowser', () => {
  it('return true for chrome 80', () => {
    const test = detectorBrowser({ name: 'chrome', version: '80' });
    expect(test).toBeTruthy();
  });

  it('return true for firefox 74', () => {
    const test = detectorBrowser({ name: 'firefox', version: '74' });
    expect(test).toBeTruthy();
  });

  it('return true for safari 11', () => {
    const test = detectorBrowser({ name: 'safari', version: '11' });
    expect(test).toBeTruthy();
  });

  it('return true for ios 11', () => {
    const test = detectorBrowser({ name: 'ios', version: '11' });
    expect(test).toBeTruthy();
  });

  it('return true for opera 62', () => {
    const test = detectorBrowser({ name: 'opera', version: '62' });
    expect(test).toBeTruthy();
  });

  it('return true for android 4', () => {
    const test = detectorBrowser({ name: 'android', version: '4' });
    expect(test).toBeTruthy();
  });

  it('return false for edge 12', () => {
    const test = detectorBrowser({ name: 'edge', version: '12' });
    expect(test).toBeFalsy();
  });
});
