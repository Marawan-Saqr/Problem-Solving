function expandedForm(num) {
  return num
      .toString()
      .split('')
      .map((digit, index, arr) => {
          let placeValue = digit * Math.pow(10, arr.length - index - 1);
          return placeValue > 0 ? placeValue.toString() : null;
      })
      .filter(Boolean)
      .join(' + ');
}


console.log(expandedForm(12));