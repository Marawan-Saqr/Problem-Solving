function pipeFix(numbers){

  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  let newArray = [];

  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }

  return newArray;

}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));