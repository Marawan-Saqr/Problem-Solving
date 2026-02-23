function array_root(arr) {

  let result = arr.map((element)=> {
    return Math.sqrt(element);
  });

  return result;

}


console.log(array_root([4, 81, 49]));