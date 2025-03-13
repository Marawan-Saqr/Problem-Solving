function oneTwoThree(n) {
  return ["9".repeat(n / 9) + (n % 9 ? n % 9 : "") || "0", "1".repeat(n) || "0"];
}


console.log(oneTwoThree(3));