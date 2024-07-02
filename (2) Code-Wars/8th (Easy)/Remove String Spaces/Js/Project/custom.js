function noSpace(x){

  let result = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] === ' ') {
      continue;
    } else {
      result += x[i];
    }
  }

  return result;


}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));