function match_arrays(array1, array2) {

  if (array1.length !== array2.length) {
    return false;
  }

  array1.sort();
  array2.sort();

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;

}

console.log(match_arrays(['hello','there','word2'], ['word2','there','hello']));