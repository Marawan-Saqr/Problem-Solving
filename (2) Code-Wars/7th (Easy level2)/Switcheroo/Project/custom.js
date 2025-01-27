function switcheroo(x) {

  let result = "";

  for (let i = 0; i < x.length; i++) {
    if (x[i] === "a") {
      result += "b";
    } else if (x[i] === "b") {
      result += "a";
    } else {
      result += x[i];
    }
  }

  return result;

}


console.log(switcheroo("acb"));