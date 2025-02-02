function findUniq(arr) {

  let result = arr.filter((element)=> {
    return arr.indexOf(element) === arr.lastIndexOf(element);
  })

  return Number(result.join());

}



console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));