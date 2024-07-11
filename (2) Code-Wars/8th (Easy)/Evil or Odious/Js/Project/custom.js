function evil(n) {
  let binary = n.toString(2);
  let countOfOnes = binary.split('1').length - 1;
  if (countOfOnes % 2 === 0) {
    return "It's Evil!";
  } else {
    return "It's Odious!";
  }
}

console.log(evil(1));