function defineSuit(card) {

  if (card.includes("♣")) {
    return "clubs";
  } else if (card.includes("♦")) {
    return "diamonds";
  } else if (card.includes("♥")) {
    return "hearts";
  } else if (card.includes("♠")) {
    return "spades"
  } else {
    return "Card Not Found";
  }

}

console.log(defineSuit("3♣"));