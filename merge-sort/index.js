function mergeSort(arr, start=0, end=arr.length - 1) {
  const helper = [...new Array(arr.length)];
  return mergeSortR(arr, 0, arr.length - 1, helper);
}  

function mergeSortR(arr, start, end, helper) {
  if(end <= start) return arr;

  const middle = start + Math.floor((end - start) / 2);
  mergeSortR(arr, start, middle, helper);
  mergeSortR(arr, middle + 1, end, helper);
  merge(arr, start, middle, end, helper);

  return arr;
}

function merge(arr, start, middle, end, helper) {
  for(let i = start; i <= end; ++i) {
    helper[i] = arr[i];
  }

  let leftIndex = start,
    rightIndex = middle + 1,
    curr = start;

  while(leftIndex <= middle) {
    if(rightIndex > end) {
      arr[curr] = helper[leftIndex];
      curr++;
      leftIndex++;
    } else if(helper[leftIndex] <= helper[rightIndex]) {
      arr[curr] = helper[leftIndex];
      curr++;
      leftIndex++;
    } else {
      arr[curr] = helper[rightIndex];
      curr++;
      rightIndex++;
    }
  }

  return arr;
}

module.exports = mergeSort;
