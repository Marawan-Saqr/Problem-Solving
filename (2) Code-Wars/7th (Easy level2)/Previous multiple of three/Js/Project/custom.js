const prevMultOfThree = n => {

  while(n > 0) {
    if (n % 3 === 0) {
      return n;
    }
    n = n.toString().slice(0, -1);
    n = parseInt(n);
  }

}

console.log(prevMultOfThree(36));