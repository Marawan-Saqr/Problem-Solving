function findSmallestInt(args) {
  let smallestNumber = args[0];
  for (let i = 0; i < args.length; i++) {
    if (smallestNumber > args[i]) {
      smallestNumber = args[i];
    }
  }
  return smallestNumber;
}

console.log(findSmallestInt([34, 15, 88, 2, 3, -300]));















