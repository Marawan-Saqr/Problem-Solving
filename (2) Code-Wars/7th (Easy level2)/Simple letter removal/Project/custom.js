function solve(s, k) {

  const abc = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < abc.length; i++) {
    while (s.includes(abc[i]) && k > 0) {
      s = s.replace(abc[i], "");
      k--;
    }
  }

  return s;

}

console.log(solve('abracadabra', 6));