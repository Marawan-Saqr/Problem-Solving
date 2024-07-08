function count_ones(num) {

  let binaryConverted = num.toString(2); // 1100100
  let counter = 0;

  for (let i = 0; i < binaryConverted.length; i++) {
    if (binaryConverted[i] === "1") {
      counter++;
    }
  }

  return counter;
}

console.log(count_ones(100));