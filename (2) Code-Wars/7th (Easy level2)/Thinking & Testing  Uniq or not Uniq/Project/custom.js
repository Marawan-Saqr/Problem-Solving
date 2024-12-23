function testit(a, b) {

  let uniqueOne = new Set(a);
  let uniqueTwo = new Set(b);

  let arrayOne = Array.from(uniqueOne);
  let arrayTwo = Array.from(uniqueTwo);


  let concating = arrayOne.concat(arrayTwo);
  return concating.sort((a, b)=> a - b);

}

console.log(testit([6, 9, 2, 4], [3, 3, 6, 3]));