function pipeFix(numbers){
  let fixedPipe = [];
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  for (let i = min; i <= max; i++) {
    if ((numbers.includes(i))) {
      fixedPipe.push(i);
    } else {
      fixedPipe.push(i);
    }
  }
  return fixedPipe;
}


console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));


















