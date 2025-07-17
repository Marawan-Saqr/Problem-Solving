function grow(x){

  let result = x.reduce((acc, current)=> {
    return acc * current;
  }, 1);

  return result;

}

console.log(grow([1, 2, 3]));