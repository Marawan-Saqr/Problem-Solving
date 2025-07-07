const words = ["banana", "apple", "watermelon", "kiwi", "grape"];
let longestWords = [...words].sort((a, b)=> a.length - b.length);
let smallestWords = [...words].sort((a, b)=> b.length - a.length);
console.log(longestWords);
console.log(smallestWords);