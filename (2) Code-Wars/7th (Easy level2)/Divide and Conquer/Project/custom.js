function divCon(x){

  let integerResult = x.filter((element)=> {
    return typeof element === "number";
  }).reduce((acc, current)=> {
    return acc + current;
  }, 0)


  let stringResult = x.filter((element)=> {
    return typeof element === "string";
  }).reduce((acc, current)=> {
    return parseInt(acc) + parseInt(current);
  }, 0)

  
  return integerResult - stringResult;

}



console.log(divCon([9, 3, '7', '3']));