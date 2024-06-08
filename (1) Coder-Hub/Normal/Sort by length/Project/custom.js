function sortByLength(txt) {

  let splited = txt.split(" ");  // ["Have", "a", "wonderful", "day"]

  let sorted = splited.sort((a, b) => a.length - b.length);

  return sorted.join(" ");
}

console.log(sortByLength("Have a wonderful day"));