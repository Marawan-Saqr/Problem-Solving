function calculateTip(amount, rating) {

  let lowerAll = rating.toLowerCase();

  if (lowerAll === "Terrible".toLocaleLowerCase()) {
    return Math.ceil(amount * 0);
  } else if (lowerAll === "Poor".toLowerCase()) {
    return Math.ceil(amount * 0.05);
  } else if (lowerAll === "Good".toLowerCase()) {
    return Math.ceil(amount * 0.10);
  } else if (lowerAll === "Great".toLowerCase()) {
    return Math.ceil(amount * 0.15);
  } else if (lowerAll === "Excellent".toLowerCase()) {
    return Math.ceil(amount * 0.20);
  } else {
    return "Rating not recognised";
  }

}



console.log(calculateTip(5, "Terrible"));