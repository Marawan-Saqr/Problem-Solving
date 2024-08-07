function howMuchILoveYou(nbPetals) {

  let names = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
  return names[(nbPetals - 1) % 6];

}

console.log(howMuchILoveYou(4));