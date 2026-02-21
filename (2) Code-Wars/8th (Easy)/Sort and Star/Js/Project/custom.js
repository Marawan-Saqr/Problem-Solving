function twoSort(s) {

  let result = "";
  let sorting = s.sort();
  let operation = sorting[0];

  for (let i = 0; i < operation.length; i++) {
    if (i !== operation.length - 1) {
      result += operation[i];
      result += "***";
    } else {
      result += operation[i];
    }
  }

  return result;

}

console.log(twoSort(["Bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));