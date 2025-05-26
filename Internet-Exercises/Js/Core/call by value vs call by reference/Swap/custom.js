// let swap = (x, y) => {
//   x = y; // 6
//   y = 5; // 5

//   console.log(x); // 6
//   console.log(y); // 5

// };

// console.log(swap(5, 6));



// Swapped Successfully Because Each varaibale is call by value and they take unique place in memory
// and change of one didnt Effect the another


/////////////////////////////////////////////////////////////////////////////////////////////

let swap = (x, y) => {

  x.name = y.name;     // Ahmed
  y.name = "Marawan";  // Marawan

  console.log(x.name);
  console.log(y.name);

};

console.log(swap({name: "Marawan"}, {name: "Ahmed"}));