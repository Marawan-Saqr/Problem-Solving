const mixedArray = [1, 2, 3, "hello", 5, true];

let result = mixedArray.find((element)=> {
  return typeof element !== "number";
})


console.log(result);