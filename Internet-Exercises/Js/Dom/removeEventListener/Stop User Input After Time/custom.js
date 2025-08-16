let input = document.querySelector("input");

function userChange() {
  console.log(input.value);
}

input.addEventListener("input", userChange);


setTimeout(() => {
  input.removeEventListener("input", userChange);
  alert("Event Finished");
}, 5000);