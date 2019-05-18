
const {BinarySearchTree} = require('./');

describe('BinarySearchTree', () => {
  describe('insert', () => {
    describe('when the tree is empty', () => {
      it('inserts the value into the tree', () => {
        const tree = new BinarySearchTree;
        tree.insert(1);
        expect(tree.search(1)).toEqual(true);
      });
    });

    describe('when the tree is non-empty', () => {
      it('inserts the value into the tree', () => {
        const tree = new BinarySearchTree;
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        expect(tree.search(1)).toEqual(true);
        expect(tree.search(2)).toEqual(true);
        expect(tree.search(3)).toEqual(true);
        expect(tree.search(4)).toEqual(true);
      });
    });
  });
});
