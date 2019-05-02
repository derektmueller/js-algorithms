
const {bidirectionalSearch} = require('./');

function Node(val) {
  this.value = val;
  this.neighbors = [];
}

function connectNodes(v1, v2) {
  v1.neighbors.push(v2);
  v2.neighbors.push(v1);
}

describe('bidirectionalSearch', () => {
  describe('when there is a path between source and target', () => {
    it('returns the path', () => {
      const source = new Node('source'),
        a = new Node('a'),
        b = new Node('b'),
        c = new Node('c'),
        d = new Node('d'),
        e = new Node('e'),
        f = new Node('f'),
        target = new Node('target');
      connectNodes(source, a);
      connectNodes(source, b);
      connectNodes(source, c);
      connectNodes(target, f);
      connectNodes(target, e);
      connectNodes(target, d);
      connectNodes(c, e);
     
      expect(bidirectionalSearch(source, target).map(v => v.value))
        .toEqual([source, c, e, target].map(v => v.value));
    });

    describe('when source and target are the same', () => {
      it('returns the path', () => {
        const source = new Node('source');
        connectNodes(source, source);
       
        expect(bidirectionalSearch(source, source).map(v => v.value))
          .toEqual([source].map(v => v.value));
      });
    });

    describe('when source and target are adjacent', () => {
      it('returns the path', () => {
        const source = new Node('source'),
          target = new Node('target');
        connectNodes(source, target);
       
        expect(bidirectionalSearch(source, target).map(v => v.value))
          .toEqual([source, target].map(v => v.value));
      });
    });
  });

  describe('when there is no path between source and target', () => {
    it('returns an empty path', () => {
      const source = new Node('source'),
        a = new Node('a'),
        b = new Node('b'),
        c = new Node('c'),
        d = new Node('d'),
        e = new Node('e'),
        f = new Node('f'),
        target = new Node('target');
      connectNodes(source, a);
      connectNodes(source, b);
      connectNodes(source, c);
      connectNodes(target, f);
      connectNodes(target, e);
      connectNodes(target, d);
     
      expect(bidirectionalSearch(source, target).map(v => v.value))
        .toEqual([]);
    });
  });
});
