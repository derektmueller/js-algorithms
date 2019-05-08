
const {Heap} = require('../heap');

class PriorityQueue {
  constructor({
      array = [], 
      compare = ((a, b) => a < b),
      mapValuesToIndexes = false
    } = {}) {

    this.heap = new Heap({array, compare, mapValuesToIndexes});
  }

  getTop() {
    return this.heap.getTop();
  }  
    
  isEmpty() {
    return this.heap.isEmpty();
  }  

  updateKeyByValue(value, key) {
    return this.heap.updateKeyByValue(value, key);
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
