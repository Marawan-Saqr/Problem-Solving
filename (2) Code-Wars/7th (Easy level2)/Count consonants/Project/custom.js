function consonantCount(str) {

  let alphabetic = "aeiouAEIOU";

  let counts = 0;
  for (let i = 0; i < str.length; i++) {
    if (!alphabetic.includes(str[i]) && /^[a-zA-Z]+$/.test(str[i])) {
      counts++;
    }
  }

  return counts;


}



console.log(consonantCount("123456789993"));