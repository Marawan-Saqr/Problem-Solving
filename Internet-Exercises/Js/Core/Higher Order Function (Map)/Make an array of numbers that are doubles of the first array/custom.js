function doubleNumbers(arr) {

  let doubleNumbers = arr.map(function(element, index, array) {
    let result = element + element;
    console.log(`index => ${index}`);
    console.log(`element => ${element}`);
    console.log(`array => ${array}`);
    console.log(`this => ${this}`);
    console.log(`////////////////////`);
    return result;
  }, 10)

  return doubleNumbers;

}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]