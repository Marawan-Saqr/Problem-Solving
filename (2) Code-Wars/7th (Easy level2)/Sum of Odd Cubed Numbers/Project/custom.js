function cubeOdd(arr) {

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return undefined;
    }
  }

  let oddOnly = arr.filter((element)=> {
    return element % 2 !== 0;
  }).reduce((acc, current)=> {
    return acc + Math.pow(current, 3);
  }, 0)

  return oddOnly;

}


console.log(cubeOdd([-3, -2, 2, 3]));