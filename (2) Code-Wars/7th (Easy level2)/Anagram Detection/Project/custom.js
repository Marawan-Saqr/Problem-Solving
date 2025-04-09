var isAnagram = function(test, original) {

  let testFirst = test.toLowerCase();
  let originalSecond = original.toLowerCase();

  let splitTest = testFirst.split("").sort().join("");
  let splitOriginal = originalSecond.split("").sort().join("");

  if (splitTest.length === splitOriginal.length && splitTest === splitOriginal) {
    return true;
  } else {
    return false;
  }

}



console.log(isAnagram("foefet", "toffee"));