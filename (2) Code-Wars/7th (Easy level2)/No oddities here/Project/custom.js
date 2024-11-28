function noOdds(values) {

  let result = values.filter(function(element) {
    return element % 2 === 0;
  })

  return result;

}


console.log(noOdds([0, 1, 2, 3]));