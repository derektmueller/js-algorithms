function Node(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}

class List {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  shift() {
    if(this.head === null) return;
    
    const node = this.head;
    
    if(this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;      
    }
    
    node.next = null;
    node.prev = null;
    
    return node;
  }
  
  append(node) {
    if(this.tail === null) {
      this.tail = node;
      this.head = this.tail;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
  
  delete(node) {
    if(node.prev && node.next) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    } else if(node.prev) {
      node.prev.next = null;
      this.tail = node.prev;
    } else if(node.next) {
      node.next.prev = null;
      this.head = node.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    
    node.next = null;
    node.prev = null;
  }
}

