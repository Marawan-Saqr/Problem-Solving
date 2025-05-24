const nums = [1, 2, 3, 4, 5, 6];

const result = [];
nums.forEach((element)=> {
  if (element % 2 === 0) {
    result.push(element);
  }
})

console.log(result);