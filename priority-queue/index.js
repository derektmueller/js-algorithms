
const {Heap} = require('../heap');

class PriorityQueue {
  constructor(compare = (a, b) => a < b) {
    this.heap = new Heap(compare);
  }

  getTop() {
    return this.heap.getTop();
  }  
    
  isEmpty() {
    return this.heap.isEmpty();
  }  

  updateKey(i, key) {
    return this.heap.updateKey(i, key);
  }

  insert(val) {
    return this.heap.insert(val);
  }

  extract() {
    return this.heap.extract();
  }
}

module.exports = {
  default: PriorityQueue,
  PriorityQueue,
}
