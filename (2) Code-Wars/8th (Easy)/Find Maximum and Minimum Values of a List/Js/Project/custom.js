var min = function(list){

  let minNumber = list[0];
  for (let i = 0; i < list.length; i++) {
    if (minNumber > list[i]) {
      minNumber = list[i]
    }
  }

  return minNumber;

}

var max = function(list){

  let maxNumber = list[0];
  for (let i = 0; i < list.length; i++) {
    if (maxNumber < list[i]) {
      maxNumber = list[i]
    }
  }

  return maxNumber;

}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));