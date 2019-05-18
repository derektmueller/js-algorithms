
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  this.color = null;
}

class BinarySearchTree {
  constructor({
    } = {}) {

    this.root = null;
  }

  insert(value) {
    if(!this.root) {
      this.root = new Node(value);
      return;
    }

    const insertHelper = (node, value) => {
      if(this.compare(value, node.value)) {
        if(!node.left) {
          node.left = new Node(value);
          return;
        } else {
          insertHelper(node.left, value);
        }
      } else {
        if(!node.right) {
          node.right = new Node(value);
          return;
        } else {
          insertHelper(node.right, value);
        }
      }
    };

    insertHelper(this.root, value);
  }

  delete() {
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

  predecessor() {
  }

  successor() {
  }

  minimum() {
  }

  maximum() {
  }

  compare(value1, value2) {
    return value1 < value2;
  }
}

module.exports = {
  BinarySearchTree
}
