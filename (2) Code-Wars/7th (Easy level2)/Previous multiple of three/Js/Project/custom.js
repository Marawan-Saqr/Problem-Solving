const prevMultOfThree = n => {

  while (n > 0) {
    if (n % 3 === 0) {
      return n;
    }
    n = Math.floor(n / 10);
  }
  return null;

}

console.log(prevMultOfThree(1244));