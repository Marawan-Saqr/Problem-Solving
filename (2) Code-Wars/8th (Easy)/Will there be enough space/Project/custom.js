function enough(cap, on, wait) {
  
  if (wait + on <= cap) {
    return 0;
  } else {
    return (wait + on) - cap;
  }

}

console.log(enough(100, 60, 50));