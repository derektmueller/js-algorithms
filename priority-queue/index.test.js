
const {PriorityQueue} = require('./');
const {Heap} = require('../heap');

describe('PriorityQueue', () => {
  it('delegates to heap', () => {
    const heap = new Heap();
    const pq = new PriorityQueue();

    heap.insert(1);
    pq.insert(1);

    heap.insert(2);
    pq.insert(2);

    expect(heap.extract()).toEqual(pq.extract());
    expect(heap.extract()).toEqual(pq.extract());
  });
});
