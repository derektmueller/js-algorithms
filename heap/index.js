
class Heap {
  constructor() {
    this.arr = [];
  }

  getParent(i) {
    return Math.floor(i / 2);
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

  insert(val) {
    this.arr.push(val);
    let i = this.arr.length - 1,
        p = this.getParent(i);

    while(i > 0 && this.arr[i] < this.arr[p]) {
      this.swap(p, i);
      i = p;
      p = this.getParent(i);
    }
  }

  extract() {
    let val = this.arr[0];
    this.arr[0] = this.arr[this.arr.length - 1];
    this.arr.pop();

    if(this.arr.length <= 1) {
      return val;
    }

    let i = 0,
        left = this.getLeft(i),
        right = this.getRight(i);

    while(left < this.arr.length || right < this.arr.length) {
      if(right < this.arr.length) {
        if(this.arr[i] > this.arr[left] && 
          this.arr[i] > this.arr[right]) { 

          break;
        } else if (this.arr[left] < this.arr[right]) {
          this.swap(i, left);
          i = left;
        } else {
          this.swap(i, right);
          i = right;
        }
      } else {
        if(this.arr[i] < this.arr[left]) {
          break;
        } else {
          this.swap(i, left);
          i = left;
        }
      }

      left = this.getLeft(i);
      right = this.getRight(i);
    }

    return val;
  }
}

module.exports = {
  default: Heap,
  Heap,
}
