function duckDuckGoose(players, goose) {

  let index = (goose - 1) % players.length;
  return players[index].name;

}


console.log(duckDuckGoose([
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" },
  { name: "David" }
], 1));