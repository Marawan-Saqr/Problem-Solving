// var containsDuplicate = function(nums) {

//   let sorted = nums.sort((a, b)=> a - b);

//   for (let i = 0; i < sorted.length - 1; i++) {
//     if (sorted[i] === sorted[i + 1]) {
//       return true;
//     }
//   }

//   return false;

// }

// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));


///////////////////////////////Another Solution////////////////////////////////////////////////

// var containsDuplicate = function(nums) {

//   for (let i = 0; i < nums.length; i++) {
//     if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
//       return true;
//     }
//   }

//   return false;

// }

// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));


//////////////////////////Another Solution/////////////////////////////////////////////////////

var containsDuplicate = function(nums) {

  let uniqueElements = new Set(nums);

  return uniqueElements.size < nums.length;

}

console.log(containsDuplicate([1, 2, 3, 4]));