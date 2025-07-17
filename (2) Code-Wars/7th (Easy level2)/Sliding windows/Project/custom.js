function window(length, offset, list) {

  let result = [];
  for (let i = 0; i <= list.length; i+= offset) {
    let windows = list.slice(i, i + length);
    if (windows.length === length) {
      result.push(windows);
    }
  }

  return result;

}


console.log(window(2, 1, [0, 1, 2, 3, 4]));