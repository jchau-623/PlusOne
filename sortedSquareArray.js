//   Write a function that takes in a non-empty array of integers that are sorted
//   in ascending order and returns a new array of the same length with the squares
//   of the original integers also sorted in ascending order.

function sortedSquaredArray(array) {
    let answer=[];
    for (let i = 0; i < array.length; i++){
      let num = array[i];
      answer.push(num * num);
    }


    return answer.sort((a,b)=>a-b);
  }
