function warnTheSheep(queue) {

  let wolfPlace = queue.indexOf("wolf");
  for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[queue.length - 1] === "wolf") {
      return "Pls go away and stop eating my sheep";
    } else if (queue[i] === "wolf") {
      return `Oi! Sheep number ${queue.length - wolfPlace - 1}! You are about to be eaten by a wolf!`;
    }
  }
}



console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));