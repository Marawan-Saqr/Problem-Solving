var uniqueInOrder = function(iterable) {

  if (iterable.length === 0) {
    return [];
  }

  let result = [];
  result.push(iterable[0]);
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i - 1]) {
      result.push(iterable[i]);
    }
  }

  return result;

}


console.log(uniqueInOrder("AAAABBBCCDAABBB"));