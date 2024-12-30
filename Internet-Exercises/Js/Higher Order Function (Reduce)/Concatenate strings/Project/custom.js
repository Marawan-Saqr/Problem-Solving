let listOfStrings = ["Hello", "World", "Again"];
let result = listOfStrings.reduce((acc, current)=> {
  return acc + " " + current;
})


console.log(result);