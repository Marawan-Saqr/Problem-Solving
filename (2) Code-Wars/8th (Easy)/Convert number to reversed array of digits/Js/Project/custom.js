function digitize(n) {

  let stringed = n.toString();
  let splited = stringed.split("").reverse();

  let convertToNumbers = splited.map((element)=> {
    return parseInt(element);
  });

  return convertToNumbers;

}

console.log(digitize(35231));