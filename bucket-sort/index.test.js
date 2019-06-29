
const bucketSort = require('./');

describe('bucketSort', () => {
  describe('when the array is empty', () => {
    it('returns the empty array', () => {
      expect(bucketSort([])).toEqual([]);
    });
  });

  describe('when the array has 1 element', () => {
    it('returns the sorted array', () => {
      expect(bucketSort([0.5])).toEqual([0.5]);
    });
  });

  describe('when the array has more than 1 element', () => {
    it('returns the sorted array', () => {
      expect(bucketSort([0.1, 0.99, 0.5, 0.1]))
        .toEqual([0.1, 0.1, 0.5, 0.99]);
    });
  });
});
