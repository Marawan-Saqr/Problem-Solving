function warnTheSheep(queue) {

  for (let i = queue.length - 1; i >= 0; i--) {
    if (queue[queue.length - 1] === "wolf") {
      return `Pls go away and stop eating my sheep`;
    } else if (queue[i] === "wolf") {
      return `Oi! Sheep number ${queue.length - 1 - i}! You are about to be eaten by a wolf!`;
    }
  }

}


console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));