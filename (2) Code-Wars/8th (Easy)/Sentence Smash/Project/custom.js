function smash(words) {
  return words.join(" ");
};

console.log(smash(['hello', 'world', 'this', 'is', 'great']));

//////////////////////////////////////////////////////////////////////////////////

// Another Solution

function smash(words) {
  let result = words.reduce(function(acc, current) {
    return `${acc} ${current}`;
  }, "");


  return result.trim();

}

console.log(smash(['hello', 'world', 'this', 'is', 'great']));