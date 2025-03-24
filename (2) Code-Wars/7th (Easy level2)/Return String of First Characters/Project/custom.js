function makeString(s){

  let splited = s.split(" ");
  let result = "";

  for (let i = 0; i < splited.length; i++) {
    result += splited[i][0];
  }

  return result;

}



console.log(makeString("sees eyes xray yoat"));