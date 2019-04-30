
const {Queue, Node} = require('./');

describe('Queue', () => {
  describe('isEmpty', () => {
    describe('when the queue is empty', () => {
      it('returns true', () => {
        const queue = new Queue;
        expect(queue.isEmpty()).toEqual(true);
      });
    });

    describe('when the queue is not empty', () => {
      it('returns false', () => {
        const queue = new Queue;
        queue.enqueue(1);
        expect(queue.isEmpty()).toEqual(false);
      });
    });
  });

  describe('enqueue', () => {
    describe('when the queue is empty', () => {
      it('enqueuees the value onto the queue', () => {
        const queue = new Queue;

        queue.enqueue(1);
        expect(queue.head).toEqual(new Node(1));
      });
    });

    describe('when the queue is not empty', () => {
      it('enqueuees the value onto the queue', () => {
        const queue = new Queue;

        queue.enqueue(1);
        queue.enqueue(2);

        const expectedQueue = new Node(1);
        expectedQueue.next = new Node(2);
        expect(queue.head).toEqual(expectedQueue);
      });
    });
  });

  describe('dequeue', () => {
    describe('when the queue is empty', () => {
      it('returns null', () => {
        const queue = new Queue;

        expect(queue.dequeue()).toEqual(null);
      });
    });

    describe('when the queue is not empty', () => {
      it('returns the first item in the queue', () => {
        const queue = new Queue;
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.dequeue()).toEqual(1);
      });
    });
  });
});
