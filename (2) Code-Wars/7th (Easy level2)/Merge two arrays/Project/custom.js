function mergeArrays(a, b) {

  let allElements = [];
  let maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    allElements.push(a[i]);
    allElements.push(b[i]);
  }


  let result = allElements.filter((element)=> {
    return element;
  })

  return result;

}


console.log(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"]));