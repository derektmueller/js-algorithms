
const {
  BinarySearchTree, minimum, maximum, predecessor, successor,
  deleteNode
} = require('./');

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

  describe('delete', () => {
    describe('deleting the root', () => {
      describe('no children', () => {
        it('removes node from tree', () => {
          const tree = new BinarySearchTree;
          const node = tree.insert(1);
          deleteNode(tree, node);

          expect(tree.search(1)).toEqual(false);
        });  
      });

      describe('only a left child', () => {
        it('removes node from tree', () => {
          const tree = new BinarySearchTree;
          const node = tree.insert(1);
          tree.insert(0);
          deleteNode(tree, node);

          expect(tree.search(1)).toEqual(false);
          expect(tree.search(0)).toEqual(true);
        });  
      });

      describe('only a right child', () => {
        it('removes node from tree', () => {
          const tree = new BinarySearchTree;
          const node = tree.insert(1);
          tree.insert(2);
          deleteNode(tree, node);

          expect(tree.search(1)).toEqual(false);
          expect(tree.search(2)).toEqual(true);
        });  
      });

      describe('2 children and successor is right child', () => {
        it('removes node from tree', () => {
          const tree = new BinarySearchTree;
          const node = tree.insert(1);
          tree.insert(2);
          tree.insert(0);
          deleteNode(tree, node);

          expect(tree.search(1)).toEqual(false);
          expect(tree.search(2)).toEqual(true);
          expect(tree.search(0)).toEqual(true);
        });  
      });

      describe('2 children and successor is not right child', () => {
        it('removes node from tree', () => {
          const tree = new BinarySearchTree;
          const node = tree.insert(1);
          tree.insert(3);
          tree.insert(2);
          tree.insert(0);
          deleteNode(tree, node);

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
          const tree = new BinarySearchTree;
          tree.insert(2);
          const node = tree.insert(1);
          deleteNode(tree, node);

          expect(tree.search(1)).toEqual(false);
          expect(tree.search(2)).toEqual(true);
        });  
      });
    });

    describe('node is a right child', () => {
      describe('no children', () => {
        it('removes node from tree', () => {
          const tree = new BinarySearchTree;
          tree.insert(0);
          const node = tree.insert(1);
          deleteNode(tree, node);

          expect(tree.search(1)).toEqual(false);
          expect(tree.search(0)).toEqual(true);
        });  
      });
    });
  });

  describe('minimum', () => {
    it('returns the minimum element from the tree', () => {
       const tree = new BinarySearchTree;
       tree.insert(3);
       tree.insert(1);
       tree.insert(2);
       expect(minimum(tree.root).value).toEqual(1);
    });  
  });

  describe('maximum', () => {
    it('returns the maximum element from the tree', () => {
       const tree = new BinarySearchTree;
       tree.insert(3);
       tree.insert(1);
       tree.insert(2);
       expect(maximum(tree.root).value).toEqual(3);
    });  
  });

  describe('successor', () => {
    describe('node has a right child', () => {
      it('returns minimum from right subtree', () => {
        const tree = new BinarySearchTree;
        tree.insert(3);
        const node = tree.insert(1);
        tree.insert(2);
        expect(successor(node).value).toEqual(2);
      });
    });

    describe('node is a left leaf', () => {
      it('returns the parent', () => {
        const tree = new BinarySearchTree;
        tree.insert(2);
        const node = tree.insert(1);
        tree.insert(3);
        expect(successor(node).value).toEqual(2);
      });  
    });

    describe('node is a right leaf', () => {
      it(`returns the parent of the first ancestor that is a left 
        child`, () => {

        const tree = new BinarySearchTree;
        tree.insert(3);
        tree.insert(1);
        const node = tree.insert(2);
        expect(successor(node).value).toEqual(3);
      });  
    });

    describe('node has no successor', () => {
      it('returns null', () => {
        const tree = new BinarySearchTree;
        tree.insert(2);
        tree.insert(1);
        const node = tree.insert(3);
        expect(successor(node)).toEqual(null);
      });
    });
  });   

  describe('predecessor', () => {
    describe('node has a left child', () => {
      it('returns maximum from left subtree', () => {
        const tree = new BinarySearchTree;
        tree.insert(3);
        const node = tree.insert(5);
        tree.insert(4);
        expect(predecessor(node).value).toEqual(4);
      });
    });

    describe('node is a right leaf', () => {
      it('returns the parent', () => {
        const tree = new BinarySearchTree;
        tree.insert(2);
        const node = tree.insert(3);
        tree.insert(1);
        expect(predecessor(node).value).toEqual(2);
      });  
    });

    describe('node is a left leaf', () => {
      it(`returns the parent of the first ancestor that is a right 
        child`, () => {

        const tree = new BinarySearchTree;
        tree.insert(3);
        tree.insert(5);
        const node = tree.insert(4);
        expect(predecessor(node).value).toEqual(3);
      });  
    });

    describe('node has no predecessor', () => {
      it('returns null', () => {
        const tree = new BinarySearchTree;
        tree.insert(2);
        tree.insert(3);
        const node = tree.insert(1);
        expect(predecessor(node)).toEqual(null);
      });
    });
  });   
});
