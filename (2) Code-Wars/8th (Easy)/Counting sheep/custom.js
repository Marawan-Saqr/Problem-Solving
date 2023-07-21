function countSheeps(arrayOfSheep) {
  let newArray = [];
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      newArray.push(arrayOfSheep[i]);
    }
  }
  return newArray.length;
}



console.log(countSheeps([true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, true, false, false, true, true]));