import { calcScore, calcLevel } from '.';

describe('game', () => {
  describe('calcScore', () => {
    it('should calculate game score', () => {
      expect(calcScore(10)).toEqual(1000);
    });
  });

  describe('calcLevel', () => {
    it('should calculate game level', () => {
      expect(calcLevel(0)).toEqual(1);
      expect(calcLevel(1)).toEqual(1);
      expect(calcLevel(500)).toEqual(2);
      expect(calcLevel(1000)).toEqual(3);
      expect(calcLevel(1500)).toEqual(4);
      expect(calcLevel(2000)).toEqual(5);
      expect(calcLevel(2500)).toEqual(6);
      expect(calcLevel(3000)).toEqual(7);
    });
  });
});
