export const detectorKeyHolding = (function() {
  let isKeyHeld = false;
  return {
    set: (value: boolean) => (isKeyHeld = value),
    get: () => isKeyHeld
  };
})();
