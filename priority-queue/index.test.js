
const {PriorityQueue} = require('./');

describe('PriorityQueue', () => {
  describe('min heap', () => {
    describe('updateKey', () => {
      it('adjusts key at given index, maintaining heap order', () => {
        const heap = new PriorityQueue;
        heap.insert(1); 
        heap.insert(2); 
        heap.insert(3); 

        expect(heap.getTop()).toEqual(1);

        heap.updateKey(0, 4);

        expect(heap.getTop()).toEqual(2);

        heap.updateKey(0, 5);

        expect(heap.getTop()).toEqual(3);

        heap.updateKey(0, 6);

        expect(heap.getTop()).toEqual(4);

        heap.updateKey(2, 1);

        expect(heap.getTop()).toEqual(1);
      });
    });
    describe('isEmpty', () => {
      describe('when heap is empty', () => {
        it('returns true', () => {
          const heap = new PriorityQueue;
          expect(heap.isEmpty()).toEqual(true);
        });
      });

      describe('when heap is not empty', () => {
        it('returns false', () => {
          const heap = new PriorityQueue;
          heap.insert(1);
          expect(heap.isEmpty()).toEqual(false);
        });
      });
    });

    describe('getTop', () => {
      it('returns minimum element', () => {
        const heap = new PriorityQueue;
        heap.insert(10);
        expect(heap.getTop()).toEqual(10);
        heap.insert(9);
        expect(heap.getTop()).toEqual(9);
        heap.insert(8);
        expect(heap.getTop()).toEqual(8);
      });
    });

    describe('insert', () => {
      it('returns undefined', () => {
        let val = 1;
        expect((new PriorityQueue).insert(val)).toEqual(undefined);
      });
    });

    describe('extract', () => {
      it('returns smallest value', () => {
        const heap = new PriorityQueue;
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
        expect((new PriorityQueue((a, b) => a > b)).insert(val)).toEqual(undefined);
      });
    });

    describe('extract', () => {
      it('returns smallest value', () => {
        const heap = new PriorityQueue((a, b) => a > b);
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
