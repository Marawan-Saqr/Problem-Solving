function countdownToNewYear() {

  // Current Date
  let currentDate = new Date();

  // Get the current year
  let currentYear = currentDate.getFullYear();

  // Calculate the number of days in the year (account for leap years)
  let daysInYear = (currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0)) ? 366 : 365;

  // The Remaining Days
  let dayOfYear = Math.floor((currentDate - new Date(currentYear, 0, 0)) / (1000 * 60 * 60 * 24));
  let theRemainingDays = daysInYear - dayOfYear;

  // The Remaining Minutes
  let currentMinute = currentDate.getMinutes();
  let theRemainingMinutes = 60 - currentMinute;

  // The Remaining Seconds
  let currentSecond = currentDate.getSeconds();
  let theRemainingSeconds = 60 - currentSecond;

  return `There are ${theRemainingDays} days, ${theRemainingMinutes} minutes, and ${theRemainingSeconds} seconds left until the New Year.`;

}

console.log(countdownToNewYear());