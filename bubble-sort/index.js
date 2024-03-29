function bubbleSort(arr) {
  for(let i = 0; i < arr.length - 1; ++i) {
    for(let j = arr.length - 1; j >= i + 1; --j) {
      if(arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }

  return arr;
}  

module.exports = bubbleSort;
