const message = "hello world";

let newObj = {};
for (let char of message) {
  if (newObj[char]) {
    newObj[char] += 1;
  } else {
    newObj[char] = 1;
  }
}


console.log(newObj);