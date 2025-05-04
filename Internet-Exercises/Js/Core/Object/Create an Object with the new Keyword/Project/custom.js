function person(name, age) {
  this.name = name;
  this.age = age;
}


person.prototype.greet = function() {
  return `Hello, My Name Is ${this.name}`;
}


let person1 = new person("Marawan Mahmoud", 27);
console.log(person1.greet());