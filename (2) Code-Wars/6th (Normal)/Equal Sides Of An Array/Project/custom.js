function findEvenIndex(arr) {

  let first = [];
  let second = [];
  for (let i = 0; i < arr.length; i++) {
    first = arr.slice(0, i);
    second = arr.slice(i + 1);
    let sumLeft = first.reduce((acc, val) => acc + val, 0);
    let sumRight = second.reduce((acc, val) => acc + val, 0);
    if (sumLeft === sumRight) {
      return i;
    }
  }

  return -1;

}



console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]));