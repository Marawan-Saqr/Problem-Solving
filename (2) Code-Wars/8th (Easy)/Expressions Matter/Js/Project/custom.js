function expressionMatter(a, b, c) {

  return Math.max(a+b+c, a*b*c, (a+b)*c, a*(b+c));

}

console.log(expressionMatter(1, 2, 3));