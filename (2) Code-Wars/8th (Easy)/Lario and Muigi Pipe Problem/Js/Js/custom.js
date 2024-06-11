function pipeFix(numbers){

  let newArray = [];
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);

  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }

  return newArray;

}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));