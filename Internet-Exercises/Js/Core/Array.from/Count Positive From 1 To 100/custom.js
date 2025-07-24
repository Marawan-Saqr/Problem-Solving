function getEvenNumbers() {

  let numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  let filtered = numbers.filter((element)=> {
    return element % 2 === 0;
  });

  return filtered;

}


console.log(getEvenNumbers());