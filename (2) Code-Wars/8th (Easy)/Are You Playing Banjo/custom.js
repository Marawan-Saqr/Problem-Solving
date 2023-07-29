function areYouPlayingBanjo(name) {
  if (name.startsWith("r") || name.startsWith("R")) {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

console.log(areYouPlayingBanjo("rdam"));