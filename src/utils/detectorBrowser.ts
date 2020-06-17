const getPathRelease = (version: string) => version.split('.')[0];

type BrowserInfo = Readonly<{
  name: string;
  version: string;
}>;

export const detectorBrowser = (browser?: BrowserInfo): boolean => {
  if (browser) {
    const name = browser.name;
    const version = browser.version;
    const path = Number(getPathRelease(version));

    switch (name) {
      case 'chrome':
      case 'firefox':
        return path >= 80;
      case 'safari':
      case 'ios':
        return path >= 11;
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
