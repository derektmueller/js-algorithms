
const insertionSort = require('../insertion-sort');

function bucketSort(arr) {
  const buckets = [];
  const k = arr.length;

  for(let i = 0; i < k; ++i) {
    buckets.push([]);
  }

  for(let i = 0; i < arr.length; ++i) {
    buckets[Math.floor(k * arr[i])].push(arr[i]);
  }

  let index = 0;

  for(let i = 0; i < buckets.length; ++i) {
    insertionSort(buckets[i]);

    for(let j = 0; j < buckets[i].length; ++j) {
      arr[index++] = buckets[i][j];
    }
  }

  return arr;
}  

module.exports = bucketSort;
