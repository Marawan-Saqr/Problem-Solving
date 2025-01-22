function minValue(values){

  let uniqueElements = [...new Set(values)];

  let joined = uniqueElements.sort().join("");

  let numbered = Number(joined);

  return numbered;

}



console.log(minValue([1, 3, 1, 2]));