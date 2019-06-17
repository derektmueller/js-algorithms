function selectionSort(arr) {
  for(let i = 0; i < arr.length; ++i) {
    let nextSmallest = i;

    for(let j = i + 1; j < arr.length; ++j) {
      if(arr[j] < arr[nextSmallest]) {
        nextSmallest = j;
      }
    }

    [arr[i], arr[nextSmallest]] = [arr[nextSmallest], arr[i]];
  }

  return arr;
}  

module.exports = selectionSort;
