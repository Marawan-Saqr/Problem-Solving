function twoSort(s) {

  let sorted = s.sort();
  let firstElement = s[0];
  let splited = firstElement.split("");
  let result = "";


  for (let i = 0; i < splited.length; i++) {
    result += `${splited[i]}***`
  }

  result = result.slice(0, -3);
  return result;

}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));