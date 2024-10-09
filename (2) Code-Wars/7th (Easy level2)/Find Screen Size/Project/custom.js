function findScreenHeight(width, ratio) {

  let numbersOnly = ratio.match(/\d+/g);
  let numbersConverted = numbersOnly.map(Number);

  let newRatioHeight = width * (parseInt(numbersConverted[1]) / parseInt(numbersConverted[0]));

  let result = `${width.toString()}x${newRatioHeight.toString()}`;

  return result;

}

console.log(findScreenHeight(3840, "32:9"));