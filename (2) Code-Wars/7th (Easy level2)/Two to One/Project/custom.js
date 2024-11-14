function longest(s1, s2) {

  let chainMake = s1 + s2;

  let uniqueChar = new Set(chainMake);

  let arrayOfChar = [];

  arrayOfChar.push(...uniqueChar);

  let sorted = arrayOfChar.sort();

  return sorted.join("");


}


console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));