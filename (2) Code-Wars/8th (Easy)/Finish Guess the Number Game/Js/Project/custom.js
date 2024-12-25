class Guesser {
  // Properties
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  // Methods
  guess(n) {
    if (this.lives === 0) {
      throw new Error("You Run Out Of Lives");
    }
    if (n === this.number) {
      return true;
    } else {
      this.lives--;
      return false;
    }
  }
}

// Operations
let gusserOne = new Guesser(4, 2);
console.log(gusserOne.guess(3));
console.log(gusserOne.lives);
console.log(gusserOne.guess(3));
console.log(gusserOne.lives);