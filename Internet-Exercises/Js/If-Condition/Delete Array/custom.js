function deleteElement(deleteArray, Element){
  for (let i = 0; i < deleteArray.length; i++) {
    if (deleteArray[i] === Element) {
      deleteArray.splice(i, 1);
      return deleteArray;
    }
  }
  return deleteArray;
}



console.log(deleteElement([13, 19, 40, 45, 90, 41, 55], 19));






















