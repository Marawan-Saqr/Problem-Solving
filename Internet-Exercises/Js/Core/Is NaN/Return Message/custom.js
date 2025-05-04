function giveMeNumber(number) {

  if (!isNaN(number)) {
    return "Yes It's Number";
  } else {
    return "No It's Not A Number";
  }

}



console.log(giveMeNumber(5));