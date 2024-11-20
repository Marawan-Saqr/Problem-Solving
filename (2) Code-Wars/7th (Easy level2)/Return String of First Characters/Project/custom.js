function makeString(s) {

  let result = s.split(" ").map((element)=> {
    return element[0];
  })

  return result.join("");

}


console.log(makeString("sees eyes xray yoat"));