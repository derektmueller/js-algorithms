
const {
  RedBlackTree, leftRotate, rightRotate, Node, validateRBProps
} = require('./');

describe('RedBlackTree', () => {
  describe('rotations', () => {
    it('left and right rotations are inverses', () => {
      const tree = new RedBlackTree;

      tree.insert(5);
      tree.insert(3);
      tree.insert(2);
      tree.insert(4);
      tree.insert(7);
      tree.insert(6);
      tree.insert(8);

      let originalTree = tree.toString();
      leftRotate(tree, tree.root);
      rightRotate(tree, tree.root);
      let treeAfterRightRotate = tree.toString();

      expect(originalTree)
        .toEqual(treeAfterRightRotate);

      leftRotate(tree, tree.root.right);
      rightRotate(tree, tree.root.right);
      treeAfterRightRotate = tree.toString();

      expect(originalTree)
        .toEqual(treeAfterRightRotate);

      leftRotate(tree, tree.root.left);
      rightRotate(tree, tree.root.left);
      treeAfterRightRotate = tree.toString();

      expect(originalTree)
        .toEqual(treeAfterRightRotate);
    });
  });

  describe('insert', () => {
    it('inserts the value into the tree', () => {
      const tree = new RedBlackTree;
      tree.insert(1);
      expect(validateRBProps(tree)).toEqual(true);
      tree.insert(2);
      expect(validateRBProps(tree)).toEqual(true);
      tree.insert(3);
      expect(validateRBProps(tree)).toEqual(true);
      tree.insert(4);
      expect(validateRBProps(tree)).toEqual(true);
      expect(tree.search(1)).toEqual(true);
      expect(tree.search(2)).toEqual(true);
      expect(tree.search(3)).toEqual(true);
      expect(tree.search(4)).toEqual(true);
    });
  });
});
