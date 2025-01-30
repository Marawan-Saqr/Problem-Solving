function declareWinner(fighter1, fighter2, firstAttacker) {
  var res = Math.ceil(fighter1.health / fighter2.damagePerAttack) - 
            Math.ceil(fighter2.health / fighter1.damagePerAttack);
  return res > 0 ? fighter1.name : (res < 0? fighter2.name : firstAttacker);
}