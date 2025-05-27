function towerBuilder(nFloors) {

  let result = [];
  for (let i = 1; i <= nFloors; i++) {
    let stars = "*".repeat(2 * i - 1);
    let spaces = " ".repeat(nFloors - i);
    result.push(spaces + stars + spaces);
  }

  return result;

}

console.log(towerBuilder(3));