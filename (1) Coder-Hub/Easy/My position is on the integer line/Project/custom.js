function less_or_more_than_zero(number) {

  if (number > 0) {
    return "Greater than zero";
  } else if (number < 0) {
    return "Less than zero";
  } else {
    return "Equal to zero";
  }

}

console.log(less_or_more_than_zero(5));