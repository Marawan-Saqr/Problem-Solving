function between(a, b) {

  let newArray = [];

  for (let i = a; i <= b; i++) {
    newArray.push(i);
  }

  return newArray;

}

console.log(between(1, 4));