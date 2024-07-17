function pipeFix(numbers){

  let newArray = [];
  let minNumber = Math.min(...numbers);
  let maxNumber = Math.max(...numbers);

  for (let i = minNumber; i <= maxNumber; i++ ) {
    newArray.push(i);
  }

  return newArray;

}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));