function noSpace(x) {
  let result = x.split(" ").filter((element)=> {
    return element !== "";
  });

  return result.join("");

}



console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));