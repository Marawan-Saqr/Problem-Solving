function shortenToDate(longDate) {

  let splited = longDate.split(" ");
  return splited.slice(0, -1).join(" ").slice(0, -1);

}

console.log(shortenToDate("Tuesday January 29, 10pm"));