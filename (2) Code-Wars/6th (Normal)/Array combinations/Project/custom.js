function solve(arr) {

  let combos = arr.reduce((acc, sub) => {
    return acc.flatMap(prev =>
      sub.map(item => [...prev, item])
    );
  }, [[]]);

  let unique = new Set(combos.map(JSON.stringify));
  return unique.size;

}

console.log(solve([[1, 2], [4, 4], [5, 6, 6]]));