function rankOfElement(arr, index) {

  let result = 0;
  let numbersBefore = [];
  let numbersAfter = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > index && arr[i] < arr[index]) {
      numbersAfter.push(arr[i]);
    } else if (i < index && arr[i] <= arr[index]) {
      numbersBefore.push(arr[i]);
    }
  }

  result = numbersBefore.length + numbersAfter.length;
  return result;


}



console.log(rankOfElement([2, 1, 2, 2, 2], 2));