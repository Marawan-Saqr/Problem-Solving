function cone_volume(radius, height) {
  // write your code here
  let pi = 3.14;
  return height * pi * Math.pow(radius, 2) / 3; 
}


console.log(cone_volume(4, 6));