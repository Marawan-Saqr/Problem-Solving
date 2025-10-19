function logical_and_(a, b) {
  return a === b ? a : false;
}


console.log(logical_and_(true, false));
console.log(logical_and_(false, false));
console.log(logical_and_(true, true));