const isReallyNaN = (val) => {

  return typeof val === "number" && isNaN(val);

}



console.log(isReallyNaN("37"));