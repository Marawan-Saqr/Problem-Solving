var singleNumber = function(nums) {

  let appearOnce = nums.filter((element)=> {
    return nums.indexOf(element) === nums.lastIndexOf(element);
  });

  return Number(appearOnce.join(""));

}


console.log(singleNumber([4, 1, 2, 1, 2]));