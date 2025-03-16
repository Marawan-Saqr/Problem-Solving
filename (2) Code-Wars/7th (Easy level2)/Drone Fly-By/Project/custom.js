function flyBy(lamps, drone){

  let result = "";
  for (let i = 0; i < lamps.length; i++) {
    if (drone[i] === "=" || drone[i] === "T") {
      result += "o";
    } else {
      result += "x";
    }
  }

  return result;

}



console.log(flyBy("xxxxxxxxxxxxxxx", "=========T"));