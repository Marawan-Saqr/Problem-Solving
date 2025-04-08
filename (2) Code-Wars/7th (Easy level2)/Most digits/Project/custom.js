function findLongest(array) {

  let stringed = array.map((element)=> {
    return element.toString();
  })

  let result = stringed.reduce((acc, current)=> {
    return acc.length >= current.length ? acc : current;
  })

  return Number(result);

}




console.log(findLongest([8, 900, 500]));