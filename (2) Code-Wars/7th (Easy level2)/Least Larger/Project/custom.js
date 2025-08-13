function leastLarger(a, i) {

  let numbersNeeded = [];
  let numberCompare = a[i];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > numberCompare) {
      numbersNeeded.push(a[i]);
    }
  }

  if (numbersNeeded.length === 0) {
    return -1;
  }

  let result = Math.min(...numbersNeeded);
  return a.indexOf(result);

}





console.log(leastLarger([1, 3, 5, 2, 4], 0));