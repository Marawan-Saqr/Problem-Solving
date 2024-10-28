let animal = {
  type: "animal",
  sound: "sound",
  makeSound: function() {
    return `This ${this.type} Makes ${this.sound}`;
  }
}

// Create Dog Object inheriting from Animal
let dog = Object.create(animal);
dog.type = "dog";
dog.sound = "Bark";


console.log(dog.makeSound());
