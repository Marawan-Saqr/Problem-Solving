let counter = 0;

function handleScroll() {
  counter++;
  console.log("Scrolling... " + counter);
  if (counter === 3) {
    window.removeEventListener("scroll", handleScroll);
    alert("Scroll Event Removed!");
  }
}


window.addEventListener("scroll", handleScroll);