function Player(name, position, age, dribbling, pass, shoot) {
  this.name = name;
  this.position = position;
  this.age = age;
  this.dribbling = dribbling;
  this.pass = pass;
  this.shoot = shoot;
}

// Creating a new Player object
const myPlayer = new Player("Dumbo", "Kata Coder", 1, 2, 3, 4);

// Log the player object
console.log(myPlayer);

// Accessing properties of the player object
console.log(myPlayer.name);       // Dumbo
console.log(myPlayer.position);   // Kata Coder
console.log(myPlayer.age);        // 1
console.log(myPlayer.dribbling);  // 2
console.log(myPlayer.pass);       // 3
console.log(myPlayer.shoot);      // 4