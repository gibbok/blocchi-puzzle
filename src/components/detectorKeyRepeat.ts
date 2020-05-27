export type DetectorKeyRepeat = Readonly<{
  set: (repeat: boolean) => void;
  get: () => boolean;
}>;

export const detectorKeyRepeat: DetectorKeyRepeat = (() => {
  let isKeyHeld = false;
  return {
    set: (value: boolean): boolean => (isKeyHeld = value),
    get: (): boolean => isKeyHeld,
  };
})();
