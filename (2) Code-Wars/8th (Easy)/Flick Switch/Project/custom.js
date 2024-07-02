function flickSwitch(arr){

  let result = [];
  let makeFalse = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      if (result[result.length - 1] === false) {
        result.push(true);
        makeFalse = true;
      } else {
        result.push(false);
        makeFalse = false;
      }
    } else if (makeFalse === false) {
      result.push(false);
    } else {
      result.push(true);
    }
  }

  return result;

}

console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
function flickSwitch(arr) {
  let emptyArray = [];
  let flickSwitched = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'flick') {
      flickSwitched = !flickSwitched;
    }
    emptyArray.push(flickSwitched);
  }

  return emptyArray;
}

console.log(flickSwitch(["flick", "flick", "flick", "flick", "flick"]));