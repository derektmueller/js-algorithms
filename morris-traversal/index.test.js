
const {
  preorder,
  inorder,
  Node
} = require('./');

describe('preorder', () => {
  it('visits nodes in preorder order', () => {
    const tree = new Node(1);
    tree.left = new Node(2);
    tree.right = new Node(3);
    tree.left.left = new Node(4);
    tree.left.right = new Node(5);
    tree.right.left = new Node(6);
    tree.right.right = new Node(7);

    let result = [];

    preorder(tree, (n) => result.push(n.value));
    expect(result).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });
});

describe('inorder', () => {
  it('visits nodes in preorder order', () => {
    const tree = new Node(1);
    tree.left = new Node(2);
    tree.right = new Node(3);
    tree.left.left = new Node(4);
    tree.left.right = new Node(5);
    tree.right.left = new Node(6);
    tree.right.right = new Node(7);

    let result = [];

    inorder(tree, (n) => result.push(n.value));
    expect(result).toEqual([4, 2, 5, 1, 6, 3, 7]);
  });
});
