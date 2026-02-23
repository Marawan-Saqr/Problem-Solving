function count_ones(num) {

  let convertToBinary = num.toString(2);
  let result = convertToBinary.split("").filter((element)=> {
    return element === "1";
  });

  return result.length;

}

console.log(count_ones(100));