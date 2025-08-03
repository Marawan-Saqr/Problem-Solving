const salaries = {
  Ahmed: 3000,
  Sara: 4500,
  Mona: 5000
};


let objectValues = Object.values(salaries);
let result = objectValues.reduce((acc, current) => acc + current, 0);
console.log(result);