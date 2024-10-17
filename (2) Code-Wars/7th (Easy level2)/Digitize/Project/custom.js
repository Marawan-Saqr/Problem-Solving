function digitize(n) {

  let result = n.toString().split("").map((element, index, array) => {
    return parseInt(element);
  })

  return result;

}

console.log(digitize(123));