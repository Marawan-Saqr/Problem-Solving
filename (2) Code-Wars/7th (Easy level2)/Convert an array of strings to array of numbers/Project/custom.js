function toNumberArray(stringarray){

  let result = stringarray.map((element)=> {
    return Number(element);
  })

  return result;

}


console.log(toNumberArray(["1", "2", "3"]));