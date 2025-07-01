function digitize(n) {

  let stringed = n.toString();
  let splited = stringed.split("");

  let mapped = splited.map((element)=> {
    return Number(element);
  })

  return mapped.reverse();

}

console.log(digitize(35231));