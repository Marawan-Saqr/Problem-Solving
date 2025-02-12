function isIntArray(arr) {

  if (!Array.isArray(arr)) {
    return false;
  }

  if (arr.length === 0) {
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return false;
    } else if (!Number.isInteger(arr[i])) {
      return false;
    }
  }

  return true;

}


console.log(isIntArray([4.0, 5.0, 6.0]));