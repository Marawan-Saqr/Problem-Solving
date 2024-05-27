function convert_to_seconds(hours) {
  let minutes = 60;
  let seconds = 60;
  return hours * minutes * seconds;
}


console.log(convert_to_seconds(1));