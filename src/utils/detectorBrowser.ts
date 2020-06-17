import { detect } from 'detect-browser';

const getPathRelease = (version: string) => version.split('.')[0];

export const detectorBrowser = (): boolean => {
  const browser = detect();
  if (browser && browser.name && browser.version) {
    const name = browser.name;
    const version = browser.version;
    const path = Number(getPathRelease(version));

    switch (name) {
      case 'chrome':
      case 'firefox':
        return path > 80;
      case 'safari':
        return path > 13;
      case 'opera':
        return path > 62;
      default:
        return false;
    }
  } else {
    return false;
  }
};
