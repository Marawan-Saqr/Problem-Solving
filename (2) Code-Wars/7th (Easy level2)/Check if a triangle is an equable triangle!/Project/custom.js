function equableTriangle(a, b, c) {

  let perimeter = a + b + c;
  let s = perimeter / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return perimeter === area;

}



console.log(equableTriangle(5, 12, 13));