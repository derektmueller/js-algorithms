function radixSort(nums) {
  if(nums.length < 1) return [];
  
  let max = -Infinity;
  
  for(let i = 0; i < nums.length; ++i) {
    if(nums[i] > max) max = nums[i]; 
  }
  
  let digits = max === 0 ? 
    1 : Math.floor(Math.log(max) / Math.log(10) + 1);
  
  function digitOf(number, d) {
    return (number > 0 ? 1 : -1) * 
      Math.floor(Math.abs(number) / Math.pow(10, d)) % 10
  }
  
  for(let i = 0; i < digits; ++i) {
    let histogram = [];
    for(let j = 0; j < 19; ++j) {
      histogram[j] = 0;
    }
    
    for(let j = 0; j < nums.length; ++j) {
      histogram[digitOf(nums[j], i) + 9]++;
    }
    
    let sum = 0;
    for(let j = 0; j < histogram.length; ++j) {
      histogram[j] = histogram[j] + sum;
      sum = histogram[j];
    }
    
    let output = [];
    
    for(let j = nums.length - 1; j >= 0; --j) {
      output[--histogram[digitOf(nums[j], i) + 9]] = nums[j];
    }
    
    nums = output;
  }

  return nums;
}  

module.exports = radixSort;
