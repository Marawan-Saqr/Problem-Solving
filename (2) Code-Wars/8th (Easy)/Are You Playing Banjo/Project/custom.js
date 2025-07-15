function areYouPlayingBanjo(name) {

  if (name.startsWith("R") || name.startsWith("r")) {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }

}


console.log(areYouPlayingBanjo("Adam"));