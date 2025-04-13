function wallpaper(l, w, h) {

  if (l === 0 || w === 0 || h === 0) {
    return "zero";
  }


  const numbers = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
    "sixteen", "seventeen", "eighteen", "nineteen", "twenty"
  ];


  let totalWallArea = 2 * (l * h + w * h);
  let totalWallAreaWithExtra = totalWallArea * 1.15;
  let rollCoverage = 0.52 * 10;
  let rolls = Math.ceil(totalWallAreaWithExtra / rollCoverage);

  return numbers[rolls];

}



console.log(wallpaper(6.3, 4.5, 3.29));