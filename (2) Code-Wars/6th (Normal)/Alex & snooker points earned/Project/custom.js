function frame(balls) {

  if (balls.includes("W")) {
    return "Foul";
  }


  const regex = /(Bk|Bn|Be|R|Y|G|B|P|W)(\d*)/g;
  let match;
  let result = [];
  while ((match = regex.exec(balls)) !== null) {
    let newObj = {};
    const color = match[1];
    newObj["color"] = color;
    const count = match[2] || '1';
    newObj["count"] = count;
    result.push(newObj);
  }

  console.log(result);

  let counter = 0;
  for (let count in result) {
    if (result[count].color === "R") {
      counter += result[count].count * 1;
    } else if (result[count].color === "Y") {
      counter += result[count].count * 2;
    } else if (result[count].color === "G") {
      counter += result[count].count * 3;
    } else if (result[count].color === "Bn") {
      counter += result[count].count * 4;
    } else if (result[count].color === "Be") {
      counter += result[count].count * 5;
    } else if (result[count].color === "P") {
      counter += result[count].count * 6;
    }  else if (result[count].color === "Bk") {
      counter += result[count].count * 7;
    }
  }

  if (counter > 148) {
    return "invalid data";
  } else {
    return counter;
  }

}


console.log(frame("R9RGBn4BkRBeP"));