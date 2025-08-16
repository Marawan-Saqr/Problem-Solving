let start = document.getElementById("start");
let stop = document.getElementById("stop");
let action = document.getElementById("action");


function hello() {
  console.log("Worked Fine");
}


start.addEventListener("click", function() {
  action.addEventListener("click", hello);
});


stop.addEventListener("click", function() {
  action.removeEventListener("click", hello);
});