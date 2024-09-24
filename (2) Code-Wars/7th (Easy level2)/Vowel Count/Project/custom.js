function getCount(str) {

  let vowelsArray = ["a", "e", "i", "o", "u"];
  let counter = 0;

  let splited = str.toLowerCase().split("");

  for (let i = 0; i < splited.length; i++) {
    if (vowelsArray.includes(splited[i])) {
      counter++;
    }
  }

  return counter;

}

console.log(getCount("abracadabra"));