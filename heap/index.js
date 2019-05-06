
class Heap {
  constructor({array = [], compare = ((a, b) => a < b)} = {}) {
    this.arr = array;
    this.compare = compare; 
    
    if(array.length) {
      this.buildHeap();
    }
  }

  buildHeap() {
    for(let i = Math.floor(this.arr.length / 2) - 1; i >= 0; --i) {
      this.heapifyDown(i);
    }
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeft(i) {
    return i * 2 + 1;
  }

  getRight(i) {
    return i * 2 + 2;
  }

  swap(i, j) {
    const tmp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = tmp;
  }
    
  getTop() {
    return this.arr[0];
  }  
    
  isEmpty() {
    return !this.arr.length;
  }  

  updateKey(i, key) {
    const oldKey = this.arr[i];

    this.arr[i] = key;

    if(key < oldKey) {
      this.heapifyUp(i);
    } else {
      this.heapifyDown(i);
    }
  }

  heapifyUp(i) {
    let p = this.getParent(i);

    while(i > 0 && this.compare(this.arr[i], this.arr[p])) {
      this.swap(p, i);
      i = p;
      p = this.getParent(i);
    }
  }

  heapifyDown(i) {
    let left = this.getLeft(i),
        right = this.getRight(i);

    while(left < this.arr.length || right < this.arr.length) {
      if(right < this.arr.length) {
        if(this.compare(this.arr[i], this.arr[left]) && 
          this.compare(this.arr[i], this.arr[right])) { 

          break;
        } else if (this.compare(this.arr[left], this.arr[right])) {
          this.swap(i, left);
          i = left;
        } else {
          this.swap(i, right);
          i = right;
        }
      } else {
        if(this.compare(this.arr[i], this.arr[left])) {
          break;
        } else {
          this.swap(i, left);
          i = left;
        }
      }

      left = this.getLeft(i);
      right = this.getRight(i);
    }
  }

  insert(val) {
    this.arr.push(val);
    this.heapifyUp(this.arr.length - 1);
  }

  extract() {
    let val = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();

    if(this.arr.length <= 1) {
      return val;
    }

    this.heapifyDown(0);

    return val;
  }
}

module.exports = {
  default: Heap,
  Heap,
}
