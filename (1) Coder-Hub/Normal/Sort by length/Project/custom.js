function sortByLength(txt) {

  let splited = txt.split(" ");
  
  let sorted = splited.sort((a, b) => a.length - b.length);

  return sorted.join(" ");

}

console.log(sortByLength("Have a wonderful day"));