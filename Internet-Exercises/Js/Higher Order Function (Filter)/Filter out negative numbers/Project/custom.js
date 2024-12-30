let numbersList = [-5, -3, -3, 2, 1, 4, -8, 9];
let filteredNumbers = numbersList.filter((element)=> {
  return element > 0;
})

console.log(filteredNumbers);