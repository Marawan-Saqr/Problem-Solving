function evenArray(even){
  let emptyArray = [];
  for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 === 0) {
      emptyArray.push(even[i]);
    }
  }
  return emptyArray;
}



console.log(evenArray([1, 2, 3, 4, 5]));

