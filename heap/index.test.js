
const {Heap} = require('./');

describe('Heap', () => {
  describe('insert', () => {
    it('returns undefined', () => {
      let val = 1;
      expect((new Heap).insert(val)).toEqual(undefined);
    });
  });

  describe('extract', () => {
    it('returns smallest value', () => {
      const heap = new Heap;
      heap.insert(3);
      heap.insert(2);
      heap.insert(1);
      expect(heap.extract()).toEqual(1);
      expect(heap.extract()).toEqual(2);
      expect(heap.extract()).toEqual(3);
    });
  });
});
