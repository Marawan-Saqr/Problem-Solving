function createArrayOfTiers(num) {

  let splited = num.toString().split("");
  let result = [];

  for (let i = 0; i < splited.length; i++) {
    result.push(splited.slice(0, i + 1).join(""));
  }

  return result;

}

console.log(createArrayOfTiers(420));