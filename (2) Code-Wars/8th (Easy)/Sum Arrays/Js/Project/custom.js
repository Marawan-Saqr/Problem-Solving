function sum(numbers) {

  let sumNumbers = numbers.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return sumNumbers;

}




console.log(sum([1, 5.2, 4, 0, -1]));