function convertPercent(percentage) {

  let convertToNumber = parseFloat(percentage);
  return convertToNumber / 100;
}

console.log(convertPercent("30%"));