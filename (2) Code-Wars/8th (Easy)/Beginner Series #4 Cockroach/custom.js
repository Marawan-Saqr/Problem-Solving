function cockroachSpeed(s) {
  let cmPerHour = s * 1000 * 100;
  cmPerSecond = cmPerHour / 3600;
  return Math.floor(cmPerSecond);
}



console.log(cockroachSpeed(1.08));