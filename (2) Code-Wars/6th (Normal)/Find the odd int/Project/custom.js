function findOdd(A) {

  let numbersObject = {};

  for (let i = 0; i < A.length; i++) {
    if (numbersObject[A[i]]) {
      numbersObject[A[i]]++;
    } else {
      numbersObject[A[i]] = 1;
    }
  }

  for (let number in numbersObject) {
    if (numbersObject[number] % 2 !== 0) {
      return Number(number);
    }
  }

}


console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));