const areaOrPerimeter = function(l , w) {

  if (l === w) {
    return l * w;
  } else {
    return (l + w) * 2;
  }

}

console.log(areaOrPerimeter(5, 5));