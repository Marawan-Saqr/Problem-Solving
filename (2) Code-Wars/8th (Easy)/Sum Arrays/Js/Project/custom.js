function sum(numbers) {

  let result = numbers.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return result;

}



console.log(sum([1, 5.2, 4, 0, -1]));