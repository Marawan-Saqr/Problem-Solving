function reverseIt(data) {

  if (typeof data !== "number" && typeof data !== "string") {
    return data;
  }


  if (typeof data === "number") {
    let stringed = data.toString();
    return Number(stringed.split("").reverse().join(""));
  }


  if (typeof data === "string") {
    return data.split("").reverse().join("");
  }

}



console.log(reverseIt("hello"));