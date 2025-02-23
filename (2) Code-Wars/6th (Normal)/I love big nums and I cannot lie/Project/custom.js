function biggest(nums) {

  let stringed = nums.toString().split(",");
  stringed.sort((a, b) => (b + a) - (a + b));
  return stringed.join('').replace(/^0+/, '') || '0';

}


console.log(biggest([3, 30, 34, 5, 9]));