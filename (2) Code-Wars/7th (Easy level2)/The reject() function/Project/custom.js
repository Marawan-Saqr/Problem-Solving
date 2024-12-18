function reject(array, predicate) {

  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i])) {
      result.push(array[i]);
    }
  }

  return result;

}


console.log(reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0));