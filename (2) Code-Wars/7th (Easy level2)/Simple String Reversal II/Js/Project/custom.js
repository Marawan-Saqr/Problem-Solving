function solve(st, a, b){

  let str = st.substr(a, b - a + 1).split('').reverse().join('');
  return st.slice(0, a) + str + st.substr(b + 1);

}

console.log(solve("codewars", 1, 5));
