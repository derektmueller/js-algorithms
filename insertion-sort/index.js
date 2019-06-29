function insertionSort(arr) {
  for(let i = 1; i < arr.length; ++i) {
    let next = arr[i];

    for(let j = 0; j < i; ++j) {
      if(next < arr[j]) {
        [arr[j], next] = [next, arr[j]];
      }
    }

    arr[i] = next;
  }

  return arr;
}  

module.exports = insertionSort;
