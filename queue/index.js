
function Node(val) {
  this.val = val;
  this.next = null;
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return this.head === null;
  }

  enqueue(val) {
    const node = new Node(val);

    if(this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
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
  default: Queue,
  Queue,
  Node
}
