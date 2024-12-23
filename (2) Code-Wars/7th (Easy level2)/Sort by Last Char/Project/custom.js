function last(x){

  let splited = x.split(" ");

  let sorted = splited.sort((a, b)=> {
    let lastCharA = a[a.length - 1];
    let lastCharB = b[b.length - 1];

    if (lastCharA < lastCharB) return -1;
    if (lastCharA > lastCharB) return 1;
    return 0;
  })

  return sorted;

}




console.log(last("man i need a taxi up to ubud"));