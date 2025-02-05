function dnaStrand(dna) {

  let result = "";
  const obj = {
    "A": "T",
    "T": "A",
    "G": "C",
    "C": "G"
  };

  for (let i = 0; i < dna.length; i++) {
    result += obj[dna[i]];
  }

  return result;

}


//////////////////////////Another Solution///////////////////////////////////

// function dnaStrand(dna) {

//   let result = "";


//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] === "A") {
//       result += "T";
//     } else if (dna[i] === "T") {
//       result += "A";
//     } else if (dna[i] === "G") {
//       result += "C";
//     } else if (dna[i] === "C") {
//       result += "G";
//     }
//   }

//   return result;

// }