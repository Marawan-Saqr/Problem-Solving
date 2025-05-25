const oddOnly = (numbers) => {

  let result = numbers.filter((element)=> {
    return element % 2 !== 0;
  })

  return result;

}

console.log(oddOnly([1, 2, 3, 4, 5, 6, 7]));