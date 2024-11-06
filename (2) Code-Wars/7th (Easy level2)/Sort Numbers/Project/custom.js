function solution(nums){

  if (nums === null) {
    return [];
  } else if (nums.length === 0) {
    return [];
  }


  return nums.sort((a, b) => a - b);


}

console.log(solution([1, 2, 3, 10, 5]));