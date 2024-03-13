function reverseList(list) {
  let newArray = [];
  for (let i = list.length - 1; i >= 0; i--) {
    newArray.push(list[i]);
  }
  return newArray;
}



console.log(reverseList([1, 2, 3, 4]));

















