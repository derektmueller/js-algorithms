function quicksort(arr, i=0, j=arr.length - 1) {
  while(i < j) {
    const p = partition(arr, i, j);

    if(p - i > j - p) {
      quicksort(arr, p + 1, j);
      j = p - 1;
    } else {
      quicksort(arr, i, p - 1);
      i = p + 1;
    }
  }

  return arr;
}  

function partition(arr, left, right) {
  let p = left + Math.floor(Math.random() * (right - left + 1));

  [arr[p], arr[right]] = [arr[right], arr[p]];

  let pivot = arr[right];
  let i = left;

  for(let start = left; start < right; ++start) {
    if(arr[start] < pivot) {
      [arr[i], arr[start]] = [arr[start], arr[i]];
      i++;
    }
  }

  [arr[i], arr[right]] = [arr[right], arr[i]];

  return i;
}


module.exports = quicksort;
