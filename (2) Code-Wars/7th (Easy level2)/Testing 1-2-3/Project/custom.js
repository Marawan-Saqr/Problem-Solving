var number = function(array){

  let result = [];

  for (let i = 0; i < array.length; i++) {
    let stringed = i + 1;
    result.push(`${stringed.toString()}: ${array[i]}`);
  }

  return result;

}



console.log(number(["a", "b", "c"]));