function missingWord(nums, str) {

  let result = "";
  let noSpaces = str.replace(/\s+/g, "");  // Hieverybody


  for (let i = 0; i < noSpaces.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === nums[j]) {
        result += noSpaces[i].toLowerCase();
      }
    }
  }

  if (result.length === nums.length) {
    return result;
  } else {
    return "No mission today";
  }

}



console.log(missingWord([50, 4, 6], "Hi everybody"));