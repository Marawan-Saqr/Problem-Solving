function accum(s) {

  let smallAll = s.toLowerCase();
  let result = "";

  for (let i = 0; i < smallAll.length; i++) {
    result += smallAll[i].toUpperCase() + smallAll[i].repeat(i);
    result += "-";
  }

  return result.slice(0, -1);

}


console.log(accum("ZpglnRxqenU"));