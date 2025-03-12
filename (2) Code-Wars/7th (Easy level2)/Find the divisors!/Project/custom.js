function divisors(integer) {

  let result = [];
  for (let i = 2; i < integer - 1; i++) {
    if (integer % i === 0) {
      result.push(i);
    }
  }

  if (result.length === 0) {
    return `${integer} is prime`;
  } else {
    return result;
  }

}



console.log(divisors(13));