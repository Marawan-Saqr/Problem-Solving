function min(arr, toReturn) {

  if (toReturn === "value") {
    return Math.min(...arr);
  } else if (toReturn === "index") {
    return arr.indexOf(Math.min(...arr));
  }

}

console.log(min([1,2,3,4,5], "index"));