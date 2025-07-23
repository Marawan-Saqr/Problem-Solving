function fixTheMeerkat(arr) {

  let temp = arr[0]; // tail
  let one = arr[2];  // head
  let two = temp;    // tail

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      result.push(one);
    } else if (i === 2) {
      result.push(two);
    } else {
      result.push(arr[i]);
    }
  }

  return result;

}


console.log(fixTheMeerkat(["tail", "body", "head"]));