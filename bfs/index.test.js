
const {bfs} = require('./');

function Node(val) {
  this.value = val;
  this.neighbors = [];
}

describe('bfs', () => {
  describe('when the graph is empty', () => {
    it('visits the nodes in breadth-first order', () => {
      expect(bfs(null, () => {})).toEqual(undefined);
    });
  });

  describe('when the graph is non-empty', () => {
    it('visits the nodes in breadth-first order', () => {
      const source = new Node('source'),
        a = new Node('a'),
        b = new Node('b'),
        c = new Node('c'),
        d = new Node('d'),
        e = new Node('e'),
        f = new Node('f'),
        g = new Node('g');
      source.neighbors.push(a);
      source.neighbors.push(b);
      source.neighbors.push(c);
      a.neighbors.push(d);
      b.neighbors.push(e);
      c.neighbors.push(f);
      f.neighbors.push(g);
      g.neighbors.push(source);

      const visited = [];

      bfs(source, (node) => visited.push(node.value));

      expect(visited)
        .toEqual(['source', 'a', 'b', 'c', 'd', 'e', 'f', 'g']);
    });
  });
});
