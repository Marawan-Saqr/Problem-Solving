function combat(health, damage) {

  let currentHealth = health - damage;

  if (currentHealth <= 0) {
    return 0;
  } else {
    return currentHealth;
  }

}

console.log(combat(92, 8));