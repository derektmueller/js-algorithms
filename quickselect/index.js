function quickselect(arr, k) {
  let i = 0,
      j = arr.length - 1;
    
  while(i <= j) {
    let p = partition(arr, i, j);
    
    if(p === k) {
        return arr[p];
    } else if(p < k) {
        i = p + 1;
    } else {
        j = p - 1;
    }
  }
    
  return null;
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

module.exports = quickselect;
