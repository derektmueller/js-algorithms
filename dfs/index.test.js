
const {dfs} = require('./');

function Node(val) {
  this.value = val;
  this.neighbors = [];
}

describe('dfs', () => {
  describe('when the graph is empty', () => {
    it('visits the nodes in breadth-first order', () => {
      expect(dfs(null, () => {})).toEqual(undefined);
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
      source.neighbors.push(f);
      f.neighbors.push(g);
      g.neighbors.push(source);

      source.neighbors.push(d);
      d.neighbors.push(e);

      source.neighbors.push(a);
      a.neighbors.push(b);
      b.neighbors.push(c);

      const visited = [];

      dfs(source, (node) => visited.push(node.value));

      expect(visited)
        .toEqual(['source', 'a', 'b', 'c', 'd', 'e', 'f', 'g']);
    });
  });
});
