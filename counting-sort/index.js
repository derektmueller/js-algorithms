function countingSort(arr) {
  const result = [];
  const counts = [];

  for(let i = 0; i < arr.length; ++i) {
    counts[arr[i]] = counts[arr[i]] ? counts[arr[i]] + 1 : 1;
  }

  for(let i = 1; i < counts.length; ++i) {
    counts[i] = 
      (counts[i - 1] ? counts[i - 1] : 0) +
      (counts[i] ? counts[i] : 0);
  }

  for(let i = arr.length - 1; i >= 0; --i) {
    result[counts[arr[i]] - 1] = arr[i];
    counts[arr[i]]--;
  }

  for(let i = 0; i < result.length; ++i) {
    arr[i] = result[i];
  }

  return arr;
}  

module.exports = countingSort;
