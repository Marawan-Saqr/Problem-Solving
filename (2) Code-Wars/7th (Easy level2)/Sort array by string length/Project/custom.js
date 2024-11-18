function sortByLength(array) {

  let sortingArray = array.sort((a, b) => a.length - b.length);

  return sortingArray;

}


console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));