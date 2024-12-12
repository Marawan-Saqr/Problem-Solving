function change(string){

  let stringOnly = string.replace(/[^a-zA-Z]/g, '').split("").join("").toLowerCase();  // abz
  let incoding = Array(26).fill('0');


  let position = 0;
  for (let i = 0; i < stringOnly.length; i++) {
    position = stringOnly[i].charCodeAt(0) - 97;
    incoding[position] = '1';
  }

  return incoding.join("");

}


console.log(change("a **&  bZ"));