
function Node(val) {
  this.val = val;
  this.next = null;
}

class List {
  constructor() {
    this.head = null;
  }

  unshift(val) {
    const node = new Node(val);
    if(this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  push(val) {
    const node = new Node(val);

    if(this.head === null) {
      this.head = node;
    } else {
      let tail = this.head;

      while(tail.next !== null) {
        tail = tail.next;
      }
      tail.next = node;
    }
  }

  pop() {
    let node;

    if(this.head === null) {
      return null;
    } else if(this.head.next === null) {
      node = this.head;
      this.head = null;
    } else {
      let prev = this.head;

      while(prev.next.next !== null) {
        prev = prev.next;
      }

      node = prev.next;
      prev.next = null;
    }

    return node.val;
  }

  shift() {
    let val;

    if(this.head === null) {
      val = null;
    } else {
      val = this.head.val;
      this.head = this.head.next;
    }
    
    return val;
  }

  deleteAt(i) {
    if(this.head === null) {
      return;
    } else if(this.head.next === null) {
      if(i === 0) {
        this.head = null;
      }
    } else {
      let j = 1,
          curr = this.head.next,
          prev = this.head;

      while(j < i && curr !== null) {
        prev = prev.next;
        curr = curr.next;
        ++j;
      }

      if(j === i) {
        prev.next = curr.next;
      }
    }
  }
}

module.exports = {
  default: List,
  List,
  Node
}
