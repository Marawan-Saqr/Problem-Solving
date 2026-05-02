function removeDuplicates(nums) {

  let convertToArray = [...new Set(nums)];
  for (let i = 0; i < convertToArray.length; i++) {
    nums[i] = convertToArray[i];
  }

  return convertToArray.length;

}

console.log(removeDuplicates([1, 1, 2, 3, 5]));
