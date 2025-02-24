function getPercentage(sent, limit = 1000) {

  if (sent >= limit) {
    return "Daily limit is reached";
  } else if (sent === 0) {
    return "No e-mails sent";
  } else {
    let result = (sent / limit) * 100;
    return `${Math.floor(result)}%`;
  }

}



console.log(getPercentage(101, 1000));