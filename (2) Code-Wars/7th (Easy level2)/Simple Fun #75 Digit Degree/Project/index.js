let array = "12345";


let result = array.split("").reduce((acc, current)=> {
  return Number(acc) + Number(current);
}, 0)