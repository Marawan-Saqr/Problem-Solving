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

console.log(flickSwitch(['codewars', 'flick', 'code', 'wars', 'flick']));




