const obj = {
  x: 1,
  y: 2,
  z: 3,
};



for (let number in obj) {
  if (obj[number] > 2) {
    const newObj = {newNumber: obj[number]}
    console.log(newObj);
  }
}