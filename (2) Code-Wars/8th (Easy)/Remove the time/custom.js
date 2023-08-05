function shortenToDate(longDate) {
  let splited = longDate.split(",");
  splited.pop();
  return splited.join();
}


console.log(shortenToDate("Friday May 2, 9am"));

















