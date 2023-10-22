function count_ones(num) {

  let binaryNumber = num.toString(2);

  let countOnes = 0;
  for (let i = 0; i < binaryNumber.length; i++) {
    if (binaryNumber[i] === '1') {
      countOnes++;
    }
  }
  
  return countOnes;
}

// تجربة الدالة
console.log(count_ones(100));


