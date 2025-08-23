function findInArray(array, callBack) {

  if (array.length === 0) {
    return -1;
  }


  for (let i = 0; i < array.length; i++) {
    if (callBack(array[i], i)) {
      return i;
    }
  }

  return -1;

}




let trueIfEven = function(value, index) {
  return (value % 2 === 0);
};


console.log(findInArray([13,5,3,1,4,5], trueIfEven));