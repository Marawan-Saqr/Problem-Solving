// Creating the original person1 object
const person1 = {
  name: "Alice",
  age: 30,
  occupation: "Engineer"
};

// Cloning person1 to create person2 using the spread operator
const person2 = { ...person1 };

// Changing the occupation property in person2
person2.occupation = "Designer";

// Logging both objects to show they are independent
console.log("Person 1:", person1); // Output: Person 1: { name: 'Alice', age: 30, occupation: 'Engineer' }
console.log("Person 2:", person2); // Output: Person 2: { name: 'Alice', age: 30, occupation: 'Designer' }