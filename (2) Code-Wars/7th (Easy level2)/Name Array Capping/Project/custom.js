function capMe(names) {

  let capitalize = names.map((element)=> {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  })

  return capitalize;

}


console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));