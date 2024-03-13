function feast(beast, dish) {
  let firstCharacterBeast = beast[0];
  let lastCharacterBeast = beast[beast.length - 1];
  let firstCharacterDish = dish[0];
  let lastCharacterDish = dish[dish.length - 1];

  if (firstCharacterBeast === firstCharacterDish && lastCharacterBeast === lastCharacterDish) {
    return true;
  } else {
    return false;
  }
}



console.log(feast("brown bear", "bear claw"));