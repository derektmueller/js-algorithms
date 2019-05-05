
const {Heap} = require('./');

describe('Heap', () => {
  describe('min heap', () => {
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

  describe('max heap', () => {
    describe('insert', () => {
      it('returns undefined', () => {
        let val = 1;
        expect((new Heap((a, b) => a > b)).insert(val)).toEqual(undefined);
      });
    });

    describe('extract', () => {
      it('returns smallest value', () => {
        const heap = new Heap((a, b) => a > b);
        heap.insert(1);
        heap.insert(2);
        heap.insert(3);
        expect(heap.extract()).toEqual(3);
        expect(heap.extract()).toEqual(2);
        expect(heap.extract()).toEqual(1);
      });
    });
  });
});
