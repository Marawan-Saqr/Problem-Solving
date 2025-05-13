function getUsersIds(str) {

  let splited = str.split(",");
  let result = [];
  for (let i = 0; i < splited.length; i++) {
    result.push(splited[i].replace(/#/g, '').replace(/uid/, '').trim().toLowerCase());
  }

  return result;

}


console.log(getUsersIds("uidone, uidtwo"));