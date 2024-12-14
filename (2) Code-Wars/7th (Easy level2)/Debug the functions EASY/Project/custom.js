function multi(arr) {

  let result = 1;

  for (let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }

  return result;

}


function add(arr) {

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;

}


function reverse(str) {

  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;

}






console.log(multi([8, 2, 5]));
console.log(add([1, 15, 3]));
console.log(reverse("Hello World"));