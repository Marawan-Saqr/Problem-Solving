function sum(...args) {
  return args.reduce((acc, current) => acc + current);
}


console.log(sum(10, 40, 30));