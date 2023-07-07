function match_arrays(array1, array2) {
  array1.sort();
  array2.sort();

  console.log(array1);
  console.log(array2);


  for (let i = 0; i < Math.min(array1.length, array2.length); i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;

}


console.log(match_arrays(['hello','there','word'], ['word', 'there', 'hello']));























