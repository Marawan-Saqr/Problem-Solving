function greet(name) {

  if (name === "" || name === null) {
    return null;
  }

  return `hello ${name}!`;

}



console.log(greet("Niks"));