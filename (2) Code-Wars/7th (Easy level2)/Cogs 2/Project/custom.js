function cogRpm(cogs, n) {

  const nthCogRpm = 1;
  let directionFirst = (n % 2 === 0) ? 1 : -1;
  let rpmFirst = directionFirst * nthCogRpm * (cogs[n] / cogs[0]);
  let directionLast = ((cogs.length - 1 - n) % 2 === 0) ? 1 : -1;
  let rpmLast = directionLast * nthCogRpm * (cogs[n] / cogs[cogs.length - 1]);
  return [rpmFirst, rpmLast];

}


console.log(cogRpm([100, 50, 25], 1));