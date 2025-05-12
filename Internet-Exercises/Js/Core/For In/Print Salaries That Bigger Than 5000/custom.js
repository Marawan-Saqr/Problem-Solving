let salaries = {
  Ahmed: 4500,
  Mona: 5200,
  Tamer: 6000,
  Nada: 4800
};


for (let key in salaries) {
  if (salaries[key] > 5000) {
    console.log(key + ": " + salaries[key]);
  }
}