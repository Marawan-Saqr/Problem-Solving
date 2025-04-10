function solve(arr) {

  let result = [];
  let stillbigger = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] >= arr[j]) {
        stillbigger = true;
      } else {
        stillbigger = false;
        break;
      }
    }
    if (stillbigger === true) {
      result.push(arr[i]);
      stillbigger = false;
    }
  }

  result.push(arr[arr.length - 1]);
  let uniqueElements = [...new Set(result)];
  return uniqueElements;

}


console.log(solve([16, 17, 14, 3, 14, 5, 2]));