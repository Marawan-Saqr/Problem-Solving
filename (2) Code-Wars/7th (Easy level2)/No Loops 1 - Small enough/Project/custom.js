function smallEnough(a, limit) {

  let mapped = a.map((element)=> {
    return element <= limit;
  })


  if (mapped.includes(false)) {
    return false;
  } else {
    return true;
  }

}




console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));