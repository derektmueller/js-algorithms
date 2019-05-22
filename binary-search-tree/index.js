
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.parent = null;
}

function transplant(tree, u, v) {
  if(!u.parent) {
    tree.root = v;
  } else if(u.parent.left === u) {
    u.parent.left = v;
    if(v) v.parent = u.parent;
  } else {
    u.parent.right = v;
    if(v) v.parent = u.parent;
  }
}

function deleteNode(tree, node) {
  if(!node.left) {
    transplant(tree, node, node.right);
  } else if(!node.right) {
    transplant(tree, node, node.left);
  } else {
    const succ = successor(node);

    if(succ !== node.right) {
      transplant(tree, succ, succ.right);
      succ.right = node.right;
      node.right.parent = succ;
    }

    transplant(tree, node, succ);
    succ.left = node.left;
    node.left.parent = succ;
  }
}

function predecessor(node) {
  if(node.left) {
    return maximum(node.left);
  } else {
    let parent = node.parent;

    while(parent && parent.right !== node) {
      parent = parent.parent;
      node = node.parent;
    }

    return parent;
  }
}

function successor(node) {
  if(node.right) {
    return minimum(node.right);
  } else {
    let parent = node.parent;

    while(parent && parent.left !== node) {
      parent = parent.parent;
      node = node.parent;
    }

    return parent;
  }
}

function minimum(node) {
  while(node.left) { node = node.left; }
  return node;
}

function maximum(node) {
  while(node.right) { node = node.right; }
  return node;
}

class BinarySearchTree {
  constructor({
    } = {}) {

    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if(!this.root) {
      this.root = node;
      return node;
    }

    const insertHelper = (root, node) => {
      if(this.compare(node.value, root.value)) {
        if(!root.left) {
          root.left = node;
          node.parent = root;
          return;
        } else {
          insertHelper(root.left, node);
        }
      } else {
        if(!root.right) {
          root.right = node;
          node.parent = root;
          return;
        } else {
          insertHelper(root.right, node);
        }
      }
    };

    insertHelper(this.root, node);
    
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

module.exports = {
  BinarySearchTree,
  deleteNode,
  minimum,
  maximum,
  predecessor,
  successor 
}
