function flickSwitch(arr) {

  let isFlicked = true;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      isFlicked = !isFlicked;
    }
    result.push(isFlicked);
  }

  return result;

}



console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));