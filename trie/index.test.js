
const {Trie, Node} = require('./');

describe('Trie', () => {
  describe('insert', () => {
    it('adds a word to the trie', () => {
      const trie = new Trie;

      expect(trie.insert("hello")).toEqual(undefined);
      expect(trie.insert("he")).toEqual(undefined);
      expect(trie.insert("hellohello")).toEqual(undefined);
      expect(trie.insert("bye")).toEqual(undefined);
      expect(trie.insert("bye")).toEqual(undefined);
    });
  });

  describe('isPrefix', () => {
    it('returns boolean indicating whether word is a prefix', () => {
      const trie = new Trie;

      expect(trie.insert("hello"))
      expect(trie.insert("he"))
      expect(trie.insert("hellohello"))
      expect(trie.insert("bye"))
      expect(trie.insert("bye"))

      expect(trie.isPrefix("bye")).toEqual(true);
      expect(trie.isPrefix("b")).toEqual(true);
      expect(trie.isPrefix("go")).toEqual(false);
    });
  });
});
