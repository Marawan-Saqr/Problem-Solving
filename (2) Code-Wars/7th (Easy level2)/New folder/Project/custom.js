function initials(n){

  let result = "";
  let splited = n.split(" ");


  for (let i = 0; i < splited.length; i++) {
    if (i === splited.length - 1) {
      result += splited[i].charAt(0).toUpperCase() + splited[i].slice(1).toLowerCase();
    } else {
      result += splited[i].charAt(0).toUpperCase();
      result += ".";
    }
  }

  return result;

}



console.log(initials("Barack hussein obama"));