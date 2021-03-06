import { BrowserInfo } from '../game/types';

const getPathRelease = (version: string) => version.split('.')[0];

export const detectorBrowser = (browser?: BrowserInfo): boolean => {
  if (browser) {
    const name = browser.name;
    const version = browser.version;
    const path = Number(getPathRelease(version));

    switch (name) {
      case 'chrome':
        return path >= 80;
      case 'firefox':
        return path >= 77;
      case 'safari':
      case 'ios':
        return path >= 13;
      case 'opera':
        return path >= 62;
      case 'android':
        return path >= 4;
      default:
        return false;
    }
  } else {
    return false;
  }
};
