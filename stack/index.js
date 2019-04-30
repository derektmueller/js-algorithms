
function Node(val) {
  this.val = val;
  this.next = null;
}

class Stack {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  push(val) {
    const node = new Node(val);
    if(this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  pop() {
    let val;

    if(this.head === null) {
      val = null;
    } else {
      val = this.head.val;
      this.head = this.head.next;
    }
    
    return val;
  }
}

module.exports = {
  default: Stack,
  Stack,
  Node
}
