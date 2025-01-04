function commonGround(s1, s2){

  let splited = s1.split(" ");
  let splited2 = s2.split(" ");
  let result = [];


  for (let i = 0; i < splited.length; i++) {
    if (splited.includes(splited2[i])) {
      result.push(splited2[i]);
    }
  }

  return result.length === 0 ? "death" : result.join(" ");

}



console.log(commonGround("eat chicken and rice", "eat"));