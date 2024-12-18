function initializeNames(name){

  let splited = name.split(" ");
  let result = [];

  if (splited.length <= 2) {
    return splited.join(" ");
  }


  for (let i = 0; i < splited.length; i++) {
    if (splited[i] !== splited[0] && splited[i] !== splited[splited.length - 1]) {
      result.push(`${splited[i].slice(0, 1).toUpperCase()}.`);
    } else {
      result.push(splited[i]);
    }
  }

  return result.join(" ");

}


console.log(initializeNames("Lois Mary Lane"));