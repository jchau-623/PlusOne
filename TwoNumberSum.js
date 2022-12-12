// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. If any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any
// order. If no two numbers sum up to the target sum, the function should return
// an empty array.

function twoNumberSum(array, targetSum) {
    let ans = [];

      for (let i = 0; i < array.length; i++){
          let num1 = array[i];
          for(let j = i + 1; j < array.length; j++){
              let num2 = array[j];
              if(num1 + num2 === targetSum){
                  ans.push(num1);
                  ans.push(num2);
              }
          }
      }
      return ans;
  }


const twoSum = function(nums, target) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        if (hash[complement] !== undefined) return [i, hash[complement]]
        hash[num] = i;
    }
}
//
