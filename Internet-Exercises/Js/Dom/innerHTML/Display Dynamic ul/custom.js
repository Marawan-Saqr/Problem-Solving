const myArray = ["HTML", "CSS", "JavaScript"];
let ul = document.getElementById("myList");


for (let i = 0; i < myArray.length; i++) {
  ul.innerHTML += `<li>${myArray[i]}</li>`;
}

