function outed(meet, boss) {

  let result = 0;
  for (let person in meet) {
    if (person === boss) {
      result += meet[person] * 2;
    } else {
      result += meet[person];
    }
  }

  let finalResult = (result / Object.keys(meet).length);

  if (finalResult <= 5) {
    return "Get Out Now!";
  } else {
    return "Nice Work Champ!";
  }

}




console.log(outed({ tim: 0, jim: 2, randy: 0, sandy: 7, andy: 0, katie: 5, laura: 1, saajid: 2, alex: 3, john: 2, mr: 0 }, "laura"));