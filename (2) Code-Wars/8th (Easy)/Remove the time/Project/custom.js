function shortenToDate(longDate) {

  let splited = longDate.split(",");

  splited.pop();

  return splited.join(" ");

}

console.log(shortenToDate("Tuesday January 29, 10pm"));