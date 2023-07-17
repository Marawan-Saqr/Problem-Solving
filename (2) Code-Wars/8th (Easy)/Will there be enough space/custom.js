function enough(cap, on, wait) {
  let result = on + wait;
  if (result === cap || result < cap) {
    return 0;
  } else {
    return result - cap;
  }
}


console.log(enough(30, 10, 5));
















