export type DetectorKeyRepeat = Readonly<{
  set: (repeat: boolean) => void;
  get: () => boolean;
}>;

export const detectorKeyRepeat = (function () {
  let isKeyHeld = false;
  return {
    set: (value: boolean) => (isKeyHeld = value),
    get: () => isKeyHeld,
  };
})();
