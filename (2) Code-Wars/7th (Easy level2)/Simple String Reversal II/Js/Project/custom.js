function solve(st, a, b) {

  let slicing = st.slice(a, b + 1);
  let reversing = slicing.split("").reverse().join("");

  return st.replace(slicing, reversing);

}

console.log(solve("codewars", 1, 5));
