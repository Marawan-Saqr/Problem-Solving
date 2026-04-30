function squareOrSquareRoot(array) {

  let result = array.map((element)=> {
    let root = Math.sqrt(element);
    let checkRoot = Number.isInteger(root);
    if (checkRoot) {
      return root;
    } else {
      return Math.pow(element, 2);
    }
  });

  return result;

}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));