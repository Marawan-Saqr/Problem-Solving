function checkThreeAndTwo(array) {

  let sorted = array.sort();

  let counterOne = 0;
  let counterTwo = 0;
  let counterThree = 0;
  let arrayCounter = [];


  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === "a") {
      counterOne++;
    } else if (sorted[i] === "b") {
      counterTwo++
    } else if (sorted[i] === "c") {
      counterThree++
    }
  }

  arrayCounter.push(counterOne);
  arrayCounter.push(counterTwo);
  arrayCounter.push(counterThree);

  if (arrayCounter.includes(2) && arrayCounter.includes(3)) {
    return true;
  } else {
    return false;
  }

}



console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"]));