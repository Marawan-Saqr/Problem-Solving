function nameThatNumber(num) {

  const units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

  if (num < 20) {
    return units[num];
  } else {
    let tensPart = tens[Math.floor(num / 10)];
    let unitsPart = num % 10 !== 0 ? units[num % 10] : "";
    return `${tensPart} ${unitsPart}`.trim();
  }

}


console.log(nameThatNumber(20));