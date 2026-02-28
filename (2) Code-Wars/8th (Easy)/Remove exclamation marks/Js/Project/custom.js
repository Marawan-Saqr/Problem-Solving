function removeExclamationMarks(s) {

  let result = s.split("").filter((element)=> {
    return element !== "!";
  });

  return result.join("");

}

console.log(removeExclamationMarks("Hello World!"));