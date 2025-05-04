function last(x){

  let splited = x.split(" ");
  let sorted = splited.sort((a, b)=> {
    let one = a[a.length - 1];
    let two = b[b.length - 1];

    if (one > two) {
      return 1;
    } else if (one < two) {
      return -1;
    } else {
      return 0;
    }
  })

  return sorted;

}




console.log(last("man i need a taxi up to ubud"));