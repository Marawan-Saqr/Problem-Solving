function normalizeStrings(arr) {

  let result = arr.map((element, index, array) => {
    let finalResult = element.toLowerCase();
    return finalResult;
  })

  return result;

}

console.log(normalizeStrings(["Hello", "WORLD"]));