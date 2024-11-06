function filterUnique(arr) {

  const seen = new Set();
  return arr.filter((element) => {
      if (!seen.has(element)) {
          seen.add(element);
          return true;
      }
      return false;
  });
}

console.log(filterUnique([1, 2, 2, 3, 4, 4, 5]));