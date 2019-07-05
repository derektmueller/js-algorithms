
const quickselect = require('./');

describe('quickselect', () => {
  describe('when the array is empty', () => {
    it('returns null', () => {
      expect(quickselect([], 5)).toEqual(null);
    });
  });

  describe('when the array is not empty', () => {
    it('returns the kth element', () => {
      expect(quickselect([100, 99, 50, 1], 2)).toEqual(99);
    });
  });
});
