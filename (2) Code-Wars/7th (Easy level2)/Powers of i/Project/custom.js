function pofi(n){
  return ["1", "i", "-1", "-i"][n % 4];
}


console.log(pofi(0));