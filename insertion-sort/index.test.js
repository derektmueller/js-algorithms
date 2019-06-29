
const insertionSort = require('./');

describe('insertionSort', () => {
  describe('when the array is empty', () => {
    it('returns the empty array', () => {
      expect(insertionSort([])).toEqual([]);
    });
  });

  describe('when the array has 1 element', () => {
    it('returns the sorted array', () => {
      expect(insertionSort([100])).toEqual([100]);
    });
  });

  describe('when the array has more than 1 element', () => {
    it('returns the sorted array', () => {
      expect(insertionSort([100, 99, 50, 1]))
        .toEqual([1, 50, 99, 100]);
    });
  });
});
