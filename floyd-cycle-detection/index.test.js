
const floydCycleDetection = require('./');

function List(val) {
  this.val = val;
  this.next = null;
}

describe('floydCycleDetection', () => {
  describe('when the list is null', () => {
    it('returns the null', () => {
      expect(floydCycleDetection(null)).toEqual(null);
    });
  });

  describe('when the list is has one element', () => {
    it('returns the null', () => {
      const node0 = new List(0);

      expect(floydCycleDetection(node0)).toEqual(null);
    });
  });

  describe('when the list is has > one element', () => {
    describe('when the list has a cycle', () => {
      it('returns the start of the cycle', () => {
        const node0 = new List(0),
              node1 = new List(1),
              node2 = new List(2),
              node3 = new List(3),
              node4 = new List(4);
        node0.next = node1;
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = node2;

        expect(floydCycleDetection(node0)).toEqual(node2);
      });
    });

    describe('when the list has no cycle', () => {
      it('returns the null', () => {
        const node0 = new List(0),
              node1 = new List(1),
              node2 = new List(2),
              node3 = new List(3),
              node4 = new List(4);
        node0.next = node1;
        node1.next = node2;
        node2.next = node3;
        node3.next = node4;
        node4.next = null;

        expect(floydCycleDetection(node0)).toEqual(null);
      });
    });
  });
});
