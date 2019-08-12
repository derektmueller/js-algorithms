
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function preorder(node, visit) {
  let current = node;
 
  while(current) {
    if(!current.left) {
      visit(current);
      current = current.right;
    } else {
      let predecessor = current.left;

      while(predecessor.right && predecessor.right !== current) {
        predecessor = predecessor.right;
      }

      if(predecessor.right === current) {
        predecessor.right = null;
        current = current.right;
      } else {
        visit(current);
        predecessor.right = current;
        current = current.left;
      }
    }
  }
}

function inorder(node, visit) {
  let current = node;
 
  while(current) {
    if(!current.left) {
      visit(current);
      current = current.right;
    } else {
      let predecessor = current.left;

      while(predecessor.right && predecessor.right !== current) {
        predecessor = predecessor.right;
      }

      if(predecessor.right === current) {
        visit(current);
        predecessor.right = null;
        current = current.right;
      } else {
        predecessor.right = current;
        current = current.left;
      }
    }
  }
}

module.exports = {
  preorder,
  inorder,
  Node
}
