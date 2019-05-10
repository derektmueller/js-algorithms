
function Entry({key, object}) {
  this.key = key;
  this.object = object;
}

class Heap {
  constructor({
      array = [], 
      compare = ((a, b) => a < b),
      objectsToValues = x => x
    } = {}) {

    this.compare = compare;
    this.objectsToEntries = 
      x => (new Entry({key: objectsToValues(x), object: x}));
    this.arr = array.map(this.objectsToEntries);
    this.objectsToIndexes = 
      new Map(this.arr.map((entry, i) => [entry.object, i]));
    
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

    this.objectsToIndexes.set(this.arr[i].object, i);
    this.objectsToIndexes.set(this.arr[j].object, j);
  }
    
  getTop() {
    return this.arr[0];
  }  
    
  isEmpty() {
    return !this.arr.length;
  }  

  updateKeyByObject(value, key) {
    const i = this.objectsToIndexes.get(value);
    this.updateKey(i, key);
  }

  updateKey(i, key) {
    const oldKey = this.arr[i].key;

    this.arr[i].key = key;

    if(this.compare(key, oldKey)) {
      this.heapifyUp(i);
    } else {
      this.heapifyDown(i);
    }
  }

  compareEntries({key: key1}, {key: key2}) {
    return this.compare(key1, key2);
  }

  heapifyUp(i) {
    let p = this.getParent(i);

    while(i > 0 && this.compareEntries(this.arr[i], this.arr[p])) {
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
        if(this.compareEntries(this.arr[i], this.arr[left]) && 
          this.compareEntries(this.arr[i], this.arr[right])) { 

          break;
        } else if(
          this.compareEntries(this.arr[left], this.arr[right])) {

          this.swap(i, left);
          i = left;
        } else {
          this.swap(i, right);
          i = right;
        }
      } else {
        if(this.compareEntries(this.arr[i], this.arr[left])) {
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
    this.arr.push(this.objectsToEntries(val));
    this.heapifyUp(this.arr.length - 1);
  }

  extract() {
    let val = this.arr[0].object;
    this.swap(0, this.arr.length - 1);
    this.arr.pop();

    if(this.arr.length <= 1) {
      return val;
    }

    this.heapifyDown(0);

    return val;
  }
}

function dijkstra(nodes, source, weights) {
  const parents = new Map,
    distances = nodes.reduce(
      (acc, v) => acc.set(v, v === source ? 0 : Infinity), new Map),
    nearest = new Heap({
        array: nodes, 
        objectsToValues: v => distances.get(v),
      });

  parents.set(source, null);

  while(!nearest.isEmpty()) {
    const node = nearest.extract();

    if(distances.get(node) === Infinity) {
      break;
    }

    for(let neighbor of node.neighbors) {
      const newDist = distances.get(node) 
        + weights.get(node).get(neighbor);

      if(newDist < distances.get(neighbor)) {
        distances.set(neighbor, newDist);
        nearest.updateKeyByObject(neighbor, newDist);
        parents.set(neighbor, node);
      }
    }
  }

  return [parents, distances];
}

module.exports = {
  dijkstra
}
