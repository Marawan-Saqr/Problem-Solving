function printKeys(obj) {

  for (let key in obj) {
    console.log(key);
  }

}

printKeys({ x: 10, y: 20, z: 30 });