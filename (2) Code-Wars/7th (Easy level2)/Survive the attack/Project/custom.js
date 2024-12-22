function hasSurvived(attackers, defenders) {

  if (attackers.length === 0 && defenders.length !== 0) {
    return true;
  } else if (attackers.length !== 0 && defenders.length === 0) {
    return false;
  }

  let attackersResult = 0;
  let defendersResult = 0;

  let minLength = Math.min(attackers.length, defenders.length);

  for (let i = 0; i < minLength; i++) {
    if (attackers[i] > defenders[i]) {
      attackersResult++;
    } else if (attackers[i] < defenders[i]) {
      defendersResult++;
    }
  }

  attackersResult += attackers.length - minLength;
  defendersResult += defenders.length - minLength;

  console.log(defendersResult);
  console.log(attackersResult);


  if (attackersResult > defendersResult) {
    return false;
  } else if (attackersResult < defendersResult) {
    return true;
  } else if (attackersResult === defendersResult) {
    const attackersPower = attackers.reduce((sum, power) => sum + power, 0);
    const defendersPower = defenders.reduce((sum, power) => sum + power, 0);
    return defendersPower >= attackersPower;
  }

}



console.log(hasSurvived([10, 10, 1, 1], [4, 4, 7]));