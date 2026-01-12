function match_arrays(array1, array2) {

  let sortedOne = array1.sort();
  let sortedTwo = array2.sort();

  for (let i = 0; i < sortedOne.length; i++) {
    if (sortedOne[i] !== sortedTwo[i]) {
      return false;
    }
  }

  return true;

}

console.log(match_arrays(['hello','there','word2'], ['word2','there','hello']));