function to24hourtime(hour, minute, period) {

  if (period === "am" && hour === 12) {
    hour = 0;
  } else if (period === "pm" && hour < 12) {
    hour += 12;
  }

  let result = "";

  if (hour < 10) {
    result += "0";
  }

  result += hour.toString();

  if (minute < 10) {
    result += "0";
  }
  result += minute.toString();

  return result;

}

console.log(to24hourtime(1, 0, "am"));