function combat(health, damage) {

  let result = health - damage;
  if (result <= 0) {
    return 0;
  } else {
    return result;
  }

}

console.log(combat(20, 30));