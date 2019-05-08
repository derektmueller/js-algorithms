
const {dijkstra} = require('./');

function Node(val) {
  this.value = val;
  this.neighbors = [];
}

describe('dijkstra', () => {
  describe('all nodes reachable from source', () => {
    it('returns shortest distance and paths to all nodes', () => {
      const a = new Node('a'),
        b = new Node('b'),
        c = new Node('c'),
        d = new Node('d'),
        e = new Node('e'),
        f = new Node('f'),
        weights = new Map(),
        nodes = [a, b, c, d, e, f];

      nodes.forEach(
        node => weights.set(node, new Map()));

      /*
       * -----------------------------------
       * v                                 |
       * a -(1)-> b -(1)-> d               |
       * |                 |               |
       * |                (1)              |
       * |                 v               |
       * | -(2)-> c -(2)-> e -(1)-> f -(1)-|
       */

      a.neighbors.push(b);
      a.neighbors.push(c);
      b.neighbors.push(d);
      d.neighbors.push(e);
      c.neighbors.push(e);
      e.neighbors.push(f);
      f.neighbors.push(a);

      weights.get(a).set(b, 1);
      weights.get(a).set(c, 2);
      weights.get(b).set(d, 1);
      weights.get(c).set(e, 2);
      weights.get(d).set(e, 1);
      weights.get(e).set(f, 1);
      weights.get(f).set(a, 1);

      const [parents, distances] = dijkstra(nodes, a, weights);

      expect(parents.get(a)).toEqual(null);
      expect(parents.get(b)).toEqual(a);
      expect(parents.get(c)).toEqual(a);
      expect(parents.get(d)).toEqual(b);
      expect(parents.get(e)).toEqual(d);
      expect(parents.get(f)).toEqual(e);

      expect(distances.get(a)).toEqual(0);
      expect(distances.get(b)).toEqual(1);
      expect(distances.get(c)).toEqual(2);
      expect(distances.get(d)).toEqual(2);
      expect(distances.get(e)).toEqual(3);
      expect(distances.get(f)).toEqual(4);
    });
  });
});
