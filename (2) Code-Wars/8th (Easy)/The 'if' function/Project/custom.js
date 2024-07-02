function _if(bool, func1, func2) {
  if (bool) {
    return func1();
  } else {
    return func2();
  }
}

function func1() {
  console.log("True");
}

function func2() {
  console.log("False");
}

console.log(_if(true, func1, func2)); // This will call func1
console.log(_if(false, func1, func2)); // This will call func2

