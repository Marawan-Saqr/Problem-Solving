function getUsersIds(str) {

  return str.split(',').map(e => e.replace(/#/g, '').replace(/uid/, '').trim().toLowerCase());

}


console.log(getUsersIds("uidone, uidtwo"));