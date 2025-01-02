function arrayLowerCase(arr) {

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      const formattedName = arr[i].charAt(0).toLowerCase() + arr[i].slice(1).toLowerCase();
      result.push(formattedName);
    } else {
      result.push(arr[i]);
    }
  }

  return result;

}



console.log(arrayLowerCase(['Red', 'Green', 1]));