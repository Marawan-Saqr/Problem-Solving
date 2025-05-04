const user = {
  firstName: "John",
  lastName: "Doe",
};

const lengthWords = {};
for (let word in user) {
  lengthWords[word] = user[word].length;
}


console.log(lengthWords);