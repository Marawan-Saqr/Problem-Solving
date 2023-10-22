function middle_char(word) {
  if (word.length % 2 === 0) {
    let middleIndex = word.length / 2;
    return word.slice(middleIndex - 1, middleIndex + 1);
  } else {
    return word[Math.floor(word.length / 2)];
  }
}


console.log(middle_char("test"));


