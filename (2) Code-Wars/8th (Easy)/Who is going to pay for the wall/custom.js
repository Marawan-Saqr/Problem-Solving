function whoIsPaying(name){
  let newArray = [];
  if (name.length > 2) {
    newArray.push(name, name[0] + name[1]);
    return newArray;
  } else if (name.length <= 2) {
    newArray.push(name);
    return newArray;
  }
}



console.log(whoIsPaying("Mee"));















