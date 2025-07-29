function shortesttoChar(s, c) {

  if (s === "" || c === "" || !s.includes(c)) {
    return [];
  }


  // Determine The Locations Of (c)
  let indexes = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      indexes.push(i);
    }
  }


  // Find The Nearest Element To Each (c)
  let result = [];
  let sum = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < indexes.length; j++) {
      let nearest = Math.abs(i - indexes[j]);
      sum.push(nearest);
    }
    result.push(Math.min(...sum));
    sum = [];
  }

  return result;

}



console.log(shortesttoChar("lovecodewars", "e"));