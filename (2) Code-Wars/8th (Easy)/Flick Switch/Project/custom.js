function flickSwitch(arr){

  let result = [];
  isFlicked = true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      isFlicked = !isFlicked;
      result.push(isFlicked);
    } else {
      result.push(isFlicked);
    }
  }


  return result;

}



console.log(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']));