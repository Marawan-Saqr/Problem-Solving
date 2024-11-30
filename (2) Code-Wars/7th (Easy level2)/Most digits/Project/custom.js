function findLongest(array){

  let result = array.map((item)=> {
    return item.toString();
  })

  const longestString = result.reduce((longest, str) => str.length > longest.length ? str : longest, "");
  return Number(longestString);

}




console.log(findLongest([1, 10, 100]));