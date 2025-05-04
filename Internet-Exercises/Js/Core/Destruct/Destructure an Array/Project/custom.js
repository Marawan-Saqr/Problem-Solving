function destructArray(colors) {

  let [color1, color2] = colors;

  return `${color1} then ${color2}`;

}



console.log(destructArray(["red", "green", "blue"]));