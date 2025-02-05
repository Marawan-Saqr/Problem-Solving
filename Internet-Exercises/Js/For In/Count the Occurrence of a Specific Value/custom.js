const obj = {
  name: "Alice",
  city: "New York",
  profession: "Engineer",
};


let counter = 0;
for (let word in obj) {
  const eCount = (obj[word].match(/e/g) || []).length; 
  counter += eCount;
}

console.log(counter);