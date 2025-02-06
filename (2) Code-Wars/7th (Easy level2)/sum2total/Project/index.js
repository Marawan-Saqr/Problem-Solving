let arr = [1, 2, 3];

let result = arr;
let sum = 0;
let index = 0;

while(result.length > 1) {

  let tempResult = [];
  let index = 0;

  while (index < result.length - 1) {
    let sum = result[index] + result[index + 1];
    tempResult.push(sum);
    index++;
  }

  result = tempResult; // تحديث result بالقيم الجديدة


}


