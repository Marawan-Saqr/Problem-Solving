function grabDoll(dolls) {

  let bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Barbie doll" || dolls[i] === "Hello Kitty") {
      if (bag.length === 3) {
        break;
      } else {
        bag.push(dolls[i]);
      }
    } else {
      continue;
    }
  }

  return bag;

}


console.log(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white", "Hello Kitty", "Mickey Mouse"]));