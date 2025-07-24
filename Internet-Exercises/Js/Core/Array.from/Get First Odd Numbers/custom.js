function getFirstOddNumbers() {

  let arr = Array.from({ length: 10 }, (_, i) => 2 * i + 1);
  return arr;

}



console.log(getFirstOddNumbers());