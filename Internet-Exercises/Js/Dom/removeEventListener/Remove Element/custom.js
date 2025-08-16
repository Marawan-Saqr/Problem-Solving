let btn = document.getElementById("btn");

function hello() {
  alert("Hello To Our Website");
}

btn.addEventListener("click", hello);


setTimeout(() => {
  btn.removeEventListener("click", hello);
  alert("Event Finished");
}, 5000);