
const {topologicalSort} = require('./');

function Graph() {
  this.nodes = [];
}

function Node(val) {
  this.value = val;
  this.neighbors = [];
}

describe('topologicalSort', () => {
  describe('when the graph contains a cycle', () => {
    it('returns null', () => {
      const graph = new Graph,
        a = new Node('a'),
        b = new Node('b'),
        c = new Node('c');

      graph.nodes.push(a);
      graph.nodes.push(b);
      graph.nodes.push(c);

      a.neighbors.push(b);
      b.neighbors.push(c);
      c.neighbors.push(a);

      expect(topologicalSort(graph)).toEqual(null);
    });
  });

  describe('when the graph does not contain a cycle', () => {
    it('returns array of nodes in topologically sorted order', () => {
      const graph = new Graph,
        a = new Node('a'),
        b = new Node('b'),
        c = new Node('c'),
        d = new Node('d'),
        e = new Node('e');

      graph.nodes.push(a);
      graph.nodes.push(b);
      graph.nodes.push(c);
      graph.nodes.push(d);
      graph.nodes.push(e);

      a.neighbors.push(b);
      b.neighbors.push(c);
      d.neighbors.push(b);
      c.neighbors.push(e);

      expect(topologicalSort(graph).map(v => v.value))
        .toEqual([a, d, b, c, e].map(v => v.value));
    });
  });
});
