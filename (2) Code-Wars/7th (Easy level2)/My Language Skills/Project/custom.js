function myLanguages(results) {

  const keys = Object.keys(results);
  let newResult = [];
  
  for (let i = 0; i < keys.length; i++) {
    if (results[keys[i]] >= 60) {
      newResult.push(keys[i]);
    }
  }

  newResult.sort((a, b) => results[b] - results[a]);

  return newResult;
}

console.log(myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}));