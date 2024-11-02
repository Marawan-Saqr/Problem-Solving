function compareObjects(obj1, obj2) {

  let obj1Length = Object.keys(obj1).length;
  let obj2Length = Object.keys(obj2).length;

  if (obj1Length !== obj2Length) {
    return false;
  }

  for (key in obj1) {
    let value1 = obj1[key];
    let value2 = obj2[key];
    if (value1 === value2) {
      return true;
    } else {
      return false;
    }
  }

}


console.log(compareObjects({ userName: "Yara" }, { userName: "Yara" }));
console.log(compareObjects({ age: 26 }, { age: 26 }));
console.log(compareObjects({ userName: "Yara" }, { userName: "Mohmed" }));
console.log(compareObjects({ userName: "Yara" }, { userName: "Yara", age: 25 }));