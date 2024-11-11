function filp_even_odd(numbers) {

  let result = numbers.map((element) => {
    return element % 2 === 0 ? element + 1 : element - 1;
  })

  return result;

}


console.log(filp_even_odd([73, 221, 52, 214]));