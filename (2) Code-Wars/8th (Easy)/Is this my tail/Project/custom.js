function correctTail(body, tail) {

  sub = body.substr(body.length-(tail.length));
  
  if (sub === tail) {
    return true
  } else { 
    return false
  }

}

console.log(correctTail(5, 6));