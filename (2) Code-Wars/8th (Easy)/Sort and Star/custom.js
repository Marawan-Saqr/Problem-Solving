function twoSort(s) {
  let sortArray = s.sort();
  let onlyValue = "";
  onlyValue += sortArray[0];
  let splited = onlyValue.split("");
  let joined = splited.join("***");
  return joined;
}



console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));