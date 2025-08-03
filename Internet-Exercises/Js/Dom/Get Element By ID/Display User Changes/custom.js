let input = document.querySelector("input");
let button = document.querySelector("button");
let result = document.getElementById("result");



button.addEventListener("click", function() {
  result.innerText = input.value;
})