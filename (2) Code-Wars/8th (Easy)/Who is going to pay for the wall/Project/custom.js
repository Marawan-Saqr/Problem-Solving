function whoIsPaying(name){

  let newArray = [];

  if (name.length <= 2) {
    newArray.push(name);
  } else if (name.length > 2) {
    newArray.push(name, name[0] + name[1]);
  }

  return newArray;

}



console.log(whoIsPaying("Mexico"));