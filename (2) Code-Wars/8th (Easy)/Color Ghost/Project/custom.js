function Ghost() {

  let colorsArray = ["white", "yellow", "purple", "red"];
  this.color = colorsArray[Math.floor(Math.random() * colorsArray.length)];

}


let newColor = new Ghost();
console.log(newColor.color);