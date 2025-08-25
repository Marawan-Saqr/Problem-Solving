function isAValidMessage(message) {

  let pairs = message.match(/(\d+)([a-zA-Z]*)/g);  // ['3hey', '5hello', '2hi']

  for (let i = 0; i < pairs.length; i++) {
    let match = pairs[i].match(/(\d+)([a-zA-Z]*)/);
    let number = parseInt(match[1]);
    let word = match[2];
    if (number !== word.length) {
      return false;
    }
  }

  return true;

}



console.log(isAValidMessage("3hey5hello2hi"));