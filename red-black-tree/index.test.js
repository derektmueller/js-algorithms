
const {
  RedBlackTree, leftRotate, rightRotate, validateRBProps,
  deleteNode, predecessor, successor, minimum, maximum,
  NullNode
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

  describe('delete', () => {
    describe('deleting the root', () => {
      describe('no children', () => {
        it('removes node from tree', () => {
          const tree = new RedBlackTree;
          const node = tree.insert(1);
          deleteNode(tree, node);
          expect(validateRBProps(tree)).toEqual(true);

          expect(tree.search(1)).toEqual(false);
        });  
      });

      describe('only a left child', () => {
        it('removes node from tree', () => {
          const tree = new RedBlackTree;
          const node = tree.insert(1);
          tree.insert(0);
          deleteNode(tree, node);
          expect(validateRBProps(tree)).toEqual(true);

          expect(tree.search(1)).toEqual(false);
          expect(tree.search(0)).toEqual(true);
        });  
      });

      describe('only a right child', () => {
        it('removes node from tree', () => {
          const tree = new RedBlackTree;
          const node = tree.insert(1);
          tree.insert(2);
          deleteNode(tree, node);
          expect(validateRBProps(tree)).toEqual(true);

          expect(tree.search(1)).toEqual(false);
          expect(tree.search(2)).toEqual(true);
        });  
      });

      describe('2 children and successor is right child', () => {
        it('removes node from tree', () => {
          const tree = new RedBlackTree;
          const node = tree.insert(1);
          tree.insert(2);
          tree.insert(0);
          deleteNode(tree, node);
          expect(validateRBProps(tree)).toEqual(true);

          expect(tree.search(1)).toEqual(false);
          expect(tree.search(2)).toEqual(true);
          expect(tree.search(0)).toEqual(true);
        });  
      });

      describe('2 children and successor is not right child', () => {
        it('removes node from tree', () => {
          const tree = new RedBlackTree;
          const node = tree.insert(1);
          tree.insert(3);
          tree.insert(2);
          tree.insert(0);
          deleteNode(tree, node);
          expect(validateRBProps(tree)).toEqual(true);

          expect(tree.search(1)).toEqual(false);
          expect(tree.search(2)).toEqual(true);
          expect(tree.search(0)).toEqual(true);
          expect(tree.search(3)).toEqual(true);
        });  
      });
    });

    describe('node is a left child', () => {
      describe('no children', () => {
        it('removes node from tree', () => {
          const tree = new RedBlackTree;
          tree.insert(2);
          const node = tree.insert(1);
          deleteNode(tree, node);
          expect(validateRBProps(tree)).toEqual(true);

          expect(tree.search(1)).toEqual(false);
          expect(tree.search(2)).toEqual(true);
        });  
      });
    });

    describe('node is a right child', () => {
      describe('no children', () => {
        it('removes node from tree', () => {
          const tree = new RedBlackTree;
          tree.insert(0);
          const node = tree.insert(1);
          deleteNode(tree, node);
          expect(validateRBProps(tree)).toEqual(true);

          expect(tree.search(1)).toEqual(false);
          expect(tree.search(0)).toEqual(true);
        });  
      });
    });
  });

  describe('minimum', () => {
    it('returns the minimum element from the tree', () => {
       const tree = new RedBlackTree;
       tree.insert(3);
       tree.insert(1);
       tree.insert(2);
       expect(minimum(tree.root).value).toEqual(1);
    });  
  });

  describe('maximum', () => {
    it('returns the maximum element from the tree', () => {
       const tree = new RedBlackTree;
       tree.insert(3);
       tree.insert(1);
       tree.insert(2);
       expect(maximum(tree.root).value).toEqual(3);
    });  
  });

  describe('successor', () => {
    describe('node has a right child', () => {
      it('returns minimum from right subtree', () => {
        const tree = new RedBlackTree;
        tree.insert(3);
        const node = tree.insert(1);
        tree.insert(2);
        expect(successor(node).value).toEqual(2);
      });
    });

    describe('node is a left leaf', () => {
      it('returns the parent', () => {
        const tree = new RedBlackTree;
        tree.insert(2);
        const node = tree.insert(1);
        tree.insert(3);
        expect(successor(node).value).toEqual(2);
      });  
    });

    describe('node is a right leaf', () => {
      it(`returns the parent of the first ancestor that is a left 
        child`, () => {

        const tree = new RedBlackTree;
        tree.insert(3);
        tree.insert(1);
        const node = tree.insert(2);
        expect(successor(node).value).toEqual(3);
      });  
    });

    describe('node has no successor', () => {
      it('returns null', () => {
        const tree = new RedBlackTree;
        tree.insert(2);
        tree.insert(1);
        const node = tree.insert(3);
        expect(successor(node)).toEqual(NullNode);
      });
    });
  });   

  describe('predecessor', () => {
    describe('node has a left child', () => {
      it('returns maximum from left subtree', () => {
        const tree = new RedBlackTree;
        tree.insert(3);
        const node = tree.insert(5);
        tree.insert(4);
        expect(predecessor(node).value).toEqual(4);
      });
    });

    describe('node is a right leaf', () => {
      it('returns the parent', () => {
        const tree = new RedBlackTree;
        tree.insert(2);
        const node = tree.insert(3);
        tree.insert(1);
        expect(predecessor(node).value).toEqual(2);
      });  
    });

    describe('node is a left leaf', () => {
      it(`returns the parent of the first ancestor that is a right 
        child`, () => {

        const tree = new RedBlackTree;
        tree.insert(3);
        tree.insert(5);
        const node = tree.insert(4);
        expect(predecessor(node).value).toEqual(3);
      });  
    });

    describe('node has no predecessor', () => {
      it('returns null', () => {
        const tree = new RedBlackTree;
        tree.insert(2);
        tree.insert(3);
        const node = tree.insert(1);
        expect(predecessor(node)).toEqual(NullNode);
      });
    });
  });   
});
