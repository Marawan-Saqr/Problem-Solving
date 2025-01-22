function reverseInvert(array){

  let filtered = array.filter((element)=> {
    return Number.isInteger(element);
  })


  let mapped = filtered.map((element)=> {
    let reversed = Number(Math.abs(element).toString().split("").reverse().join(""));
    return element < 0 ? reversed : -reversed;
  })


  return mapped;


}


console.log(reverseInvert([1, 12, 'a', 3.4, 87, 99.9, -42, 50, 5.6]));