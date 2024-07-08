function twoSort(s) {

  let result = "";
  let sorted = s.sort();
  let firstElement = sorted[0];

  for (let i = 0; i < firstElement.length; i++) {
    result += `${firstElement[i]}***`;
  }

  result = result.slice(0, -3);
  return result;

}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));