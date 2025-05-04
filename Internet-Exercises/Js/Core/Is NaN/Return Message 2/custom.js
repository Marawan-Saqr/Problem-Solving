function convertToNumber(number) {

  const convertedNumber = Number(number);

  if (!isNaN(convertedNumber)) {
    return "converted";
  } else {
    return NaN;
  }

}



console.log(convertToNumber("22"));