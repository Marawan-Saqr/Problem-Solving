function sorter(textbooks) {
  let sorted = textbooks.sort((a, b) => {
    let lowerA = a.toLowerCase();
    let lowerB = b.toLowerCase();
    
    if (lowerA < lowerB) {
      return -1;
    }
    if (lowerA > lowerB) {
      return 1;
    }
    return 0;
  });

  return sorted;
}

console.log(sorter(['Algebra', 'history', 'Geometry', 'english']));