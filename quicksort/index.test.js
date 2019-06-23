
const quicksort = require('./');

describe('quicksort', () => {
  describe('when the array is empty', () => {
    it('returns the empty array', () => {
      expect(quicksort([])).toEqual([]);
    });
  });

  describe('when the array has 1 element', () => {
    it('returns the sorted array', () => {
      expect(quicksort([100])).toEqual([100]);
    });
  });

  describe('when the array has more than 1 element', () => {
    it('returns the sorted array', () => {
      expect(quicksort([100, 99, 50, 1])).toEqual([1, 50, 99, 100]);
    });
  });
});
