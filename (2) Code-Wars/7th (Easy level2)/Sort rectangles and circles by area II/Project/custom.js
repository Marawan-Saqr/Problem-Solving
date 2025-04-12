function sortByArea(array) {

  let result = [];

  for (let i = 0; i < array.length; i++) {
    let myObj = {};
    if (array[i].length === 2) {
      myObj.shape = array[i];
      myObj.area = array[i][0] * array[i][1];
      result.push(myObj);
    } else {
      myObj.shape = array[i];
      myObj.area = Math.pow(array[i], 2) * Math.PI;
      result.push(myObj);
    }
  }

  let sorted = result.sort((a, b)=> a.area - b.area);
  let mapped = sorted.map((element)=> {
    return element.shape;
  })

  return mapped;

}




console.log(sortByArea([ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]));