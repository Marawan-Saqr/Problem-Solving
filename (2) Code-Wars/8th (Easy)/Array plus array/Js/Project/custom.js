// First Solution
function arrayPlusArray(arr1, arr2) {
  let newArrays = arr1.concat(arr2);
  let result = 0;
  for (let i = 0; i < newArrays.length; i++) {
    result += newArrays[i];
  }
  return result;
}

console.log(arrayPlusArray([1, 2, 3], [1, 2, 3]));

/////////////////////////////////////////////////////////////////////

// Second Solution
function arrayPlusArray(arr1, arr2) {
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i] + arr2[i];
  }
  return result;
}


console.log(arrayPlusArray([1, 2, 3], [1, 2, 3]));

//////////////////////////////////////////////////////////////////////

function arrayPlusArray(arr1, arr2) {
  let result1 = 0;
  let result2 = 0;
  
  for (let i = 0; i < arr1.length; i++) {
    result1 += arr1[i];
  }
  
  for (let j = 0; j < arr2.length; j++) {
    result2 += arr2[j];
  }

  return result1 + result2;

}

console.log(arrayPlusArray([1, 2, 3], [1, 2, 3]));

/////////////////////////////////////////////////////////////////////////////

function arrayPlusArray(arr1, arr2) {

  arr1.push(arr2);
  let flated = arr1.flat(arr2.length);

  let reduced = flated.reduce((acc, current) => {
    return acc + current;
  }, 0)

  return reduced;

}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));