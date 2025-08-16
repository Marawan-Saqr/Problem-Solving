let div = document.querySelector("div");

function changeColor() {
  div.style.backgroundColor = "yellow";
  div.style.transition = "0.5s";
  div.removeEventListener("mouseover", changeColor);
  setTimeout(() => {
    alert("Event Finished!");
  }, 5000);
}

div.addEventListener("mouseover", changeColor);