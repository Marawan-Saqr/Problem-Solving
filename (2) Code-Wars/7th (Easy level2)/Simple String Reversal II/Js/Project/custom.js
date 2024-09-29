function solve(st, a, b){

  let newString = st.substring(a, b + 1).split("").reverse().join("");
  let result = st.substring(0, a) + newString + st.substring(b + 1);

  return result;

}

console.log(solve("codewars", 1, 5));