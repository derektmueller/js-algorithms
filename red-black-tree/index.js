
const RED = 1;
const BLACK = 0;

const NullNode = (new (function NullNode() {
  this.color = BLACK;
}));

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
  this.color = null;
}

function predecessor(node) {
  if(node.left !== NullNode) {
    return maximum(node.left);
  } else {
    let parent = node.parent;

    while(parent !== NullNode && parent.right !== node) {
      parent = parent.parent;
      node = node.parent;
    }

    return parent;
  }
}

function successor(node) {
  if(node.right !== NullNode) {
    return minimum(node.right);
  } else {
    let parent = node.parent;

    while(parent !== NullNode && parent.left !== node) {
      parent = parent.parent;
      node = node.parent;
    }

    return parent;
  }
}

function minimum(node) {
  while(node.left !== NullNode) { node = node.left; }
  return node;
}

function maximum(node) {
  while(node.right !== NullNode) { node = node.right; }
  return node;
}

function transplant(tree, u, v) {
  if(u.parent === NullNode) {
    tree.root = v;
  } else if(u.parent.left === u) {
    u.parent.left = v;
    v.parent = u.parent;
  } else {
    u.parent.right = v;
    v.parent = u.parent;
  }
}

function deleteNode(tree, z) {
  let y = z,
    yOriginalColor = y.color,
    x;
  if(z.left === NullNode) {
    x = z.right;
    transplant(tree, z, z.right);
  } else if(z.right === NullNode) {
    x = z.left;
    transplant(tree, z, z.left);
  } else {
    y = successor(z);
    yOriginalColor = y.color;
    x = y.right;

    if(y.parent === z) {
      x.parent = y;
    } else {
      transplant(tree, y, y.right);
      y.right = z.right;
      z.right.parent = y;
    }

    transplant(tree, z, y);
    y.left = z.left;
    y.left.parent = y;
    y.color = z.color;
  }

  if(yOriginalColor === BLACK) {
    deleteFixup(tree, x);
  }
}

function deleteFixup(tree, x) {
  while(x !== tree.root && x.color === BLACK) {
    if(x == x.parent.left) {
      let w = x.parent.right;

      if(w.color === RED) {
        w.color = BLACK;
        x.parent.color = RED;
        leftRotate(tree, x.parent);
        w = x.parent.right;
      }

      if(w.left.color === BLACK && w.right.color === BLACK) {
        w.color = RED;
        x = x.parent;
      } else if(w.right.color === BLACK) {
        w.left.color = BLACK;
        w.color = RED;
        rightRotate(tree, w);
        w = x.parent.right;
      }

      w.color = x.parent.color;
      x.parent.color = BLACK;
      w.right.color = BLACK;
      leftRotate(tree, x.parent);
      x = x.root;
    } else {
      let w = x.parent.left;

      if(w.color === RED) {
        w.color = BLACK;
        x.parent.color = RED;
        rightRotate(tree, x.parent);
        w = x.parent.left;
      }

      if(w.left.color === BLACK && w.left.color === BLACK) {
        w.color = RED;
        x = x.parent;
      } else if(w.left.color === BLACK) {
        w.left.color = BLACK;
        w.color = RED;
        leftRotate(tree, w);
        w = x.parent.left;
      }

      w.color = x.parent.color;
      x.parent.color = BLACK;
      w.left.color = BLACK;
      rightRotate(tree, x.parent);
      x = x.root;
    }
  }

  x.color = BLACK;
}

function leftRotate(tree, x) {
  const y = x.right; 
  const xParent = x.parent;
  const yLeft = y.left;

  x.parent = y;
  y.left = x;
  x.right = yLeft;
  if(yLeft) yLeft.parent = x;
  y.parent = xParent;

  if(xParent === NullNode) {
    tree.root = y;
  } else if(x === xParent.left) {
    xParent.left = y;
  } else {
    xParent.right = y;
  }
}

function rightRotate(tree, y) {
  const x = y.left; 
  const yParent = y.parent;
  const xRight = x.right;

  y.parent = x;
  x.right = y;
  y.left = xRight;
  if(xRight) xRight.parent = y;
  x.parent = yParent;

  if(yParent === NullNode) {
    tree.root = x;
  } else if(y === yParent.right) {
    yParent.right = x;
  } else {
    yParent.left = x;
  }
}

class RedBlackTree {
  constructor({
    } = {}) {

    this.root = null;
  }

  toString() {
    const color = (color) => {
      switch(color) {
        case RED: return 'RED';
        case BLACK: return 'BLACK';
      }
    };

    const toStringRec = (root, depth=0) => {
      const prefix = [...new Array(2 * depth)].join(' ');
      if(root === NullNode) return "\n" + prefix + "null";
      let str = prefix;
      str += "\n";
      str += prefix + root.value + '-' + color(root.color);
      str += prefix + toStringRec(root.left, depth + 1);
      str += prefix + toStringRec(root.right, depth + 1);
      return str;
    }

    return toStringRec(this.root);
  }

  insert(value) {
    const node = new Node(value);
    node.color = RED;
    node.left = NullNode;
    node.right = NullNode;

    const insertRec = (root, node) => {
      if(this.compare(node.value, root.value)) {
        if(root.left === NullNode) {
          root.left = node;
          node.parent = root;
          return;
        } else {
          insertRec(root.left, node);
        }
      } else {
        if(root.right === NullNode) {
          root.right = node;
          node.parent = root;
          return;
        } else {
          insertRec(root.right, node);
        }
      }
    };

    const insertFixup = (tree, node) => {
      while(node.parent.color === RED) {
        if(node.parent === node.parent.parent.left) {
          const uncle = node.parent.parent.right;

          if(uncle.color === RED) {
            uncle.color = BLACK;
            node.parent.color = BLACK;
            node.parent.parent.color = RED;
            node = node.parent.parent;
          } else {
            if(node === node.parent.right) {
              node = node.parent;
              leftRotate(tree, node);
            }

            node.parent.color = BLACK;
            node.parent.parent.color = RED;
            rightRotate(tree, node.parent.parent);
          }
        } else {
          const uncle = node.parent.parent.left;

          if(uncle.color === RED) {
            uncle.color = BLACK;
            node.parent.color = BLACK;
            node.parent.parent.color = RED;
            node = node.parent.parent;
          } else {
            if(node === node.parent.left) {
              node = node.parent;
              rightRotate(tree, node);
            }

            node.parent.color = BLACK;
            node.parent.parent.color = RED;
            leftRotate(tree, node.parent.parent);
          }
        }
      }

      tree.root.color = BLACK;
    };

    if(!this.root) {
      this.root = node;
      node.parent = NullNode;
    } else {
      insertRec(this.root, node);
    }

    insertFixup(this, node);

    return node;
  }

  search(value) {
    const searchHelper = (node, value) => {
      if(!node) return false;
      if(node.value === value) return true;
      if(this.compare(value, node.value)) {
        return searchHelper(node.left, value);
      } else {
        return searchHelper(node.right, value);
      }
    };

    return searchHelper(this.root, value);
  }

  compare(value1, value2) {
    return value1 < value2;
  }
}

function validateRBProps(tree) {
  if(tree.root.color === RED) return false;

  const validateRBPropsRec = (root) => {
    if(root === NullNode) return [true, 1];

    if(root.color === RED) {
      if(root.left.color !== BLACK || root.right.color !== BLACK) {
        return [false,];
      }
    }

    let [lValid, lBlackNodes] = validateRBPropsRec(root.left);

    if(!lValid) return [false,];

    let [rValid, rBlackNodes] = validateRBPropsRec(root.right);

    if(!rValid) return [false,];
    if(lBlackNodes !== rBlackNodes) return [false,];

    return [
      true,
      lBlackNodes + root.color === RED ? 0 : 1];
  }

  return validateRBPropsRec(tree.root)[0];
}

module.exports = {
  RedBlackTree,
  leftRotate,
  rightRotate,
  validateRBProps,
  predecessor,
  successor,
  minimum,
  maximum,
  deleteNode,
  NullNode
}
