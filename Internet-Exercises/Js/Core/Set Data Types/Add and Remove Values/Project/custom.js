function addRemoveValues(array) {

  let myUniqueData = new Set(array);

  myUniqueData.add(1).add(2).add(3);
  myUniqueData.delete(2);

  return myUniqueData;


}


console.log(addRemoveValues([]));