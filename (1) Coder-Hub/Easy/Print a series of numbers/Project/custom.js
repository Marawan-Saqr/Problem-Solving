function numbers_range(number) {

  let result = "";
  for (let i = 0; i <= number; i++ ) {
    result += `${i} `;
  }

  return result.trim();

}


console.log(numbers_range(4));