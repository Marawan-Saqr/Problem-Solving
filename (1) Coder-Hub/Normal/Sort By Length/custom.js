function sortByLength(txt) {
  let words = txt.split(" ");
  
  words.sort((a, b) => {
    if (a.length === b.length) {
      return a.localeCompare(b);      
    } else {
      return a.length - b.length;    
    }
  });

  return words.join(" ");
}


console.log(sortByLength("Have a wonderful day"));



