function removeEveryOther(arr){
  let emptyArray = [];
  for (let i = 0; i < arr.length; i+= 2) {
    emptyArray.push(arr[i]);
  }
  return emptyArray;
}



console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again", "Hi", "Hey Again"]));



