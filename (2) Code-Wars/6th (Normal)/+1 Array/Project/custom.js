function upArray(arr) {

  if (arr.length === 0 || arr.some((element => element < 0 || element > 9))) {
    return null;
  }

  let stringed = arr.join("");
  let sum = (BigInt(stringed) + BigInt(1)).toString();

  while (sum.length < arr.length) {
    sum = "0" + sum;
  }

  let finalResult = sum.split("").map((element)=> {
    return Number(element);
  })

  return finalResult;


}

console.log(upArray([0, 0, 9, 0]));