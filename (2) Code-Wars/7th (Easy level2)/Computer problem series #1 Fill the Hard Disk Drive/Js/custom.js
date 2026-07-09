function save(sizes, hd) {

  let capacity = 0;
  let savedFiles = 0;

  for (let i = 0; i < sizes.length; i++) {
    capacity += sizes[i];
    if (capacity === hd) {
      savedFiles++;
      break;
    } else if (capacity > hd) {
      break;
    } else if (capacity < hd) {
      savedFiles++;
    }
  }

  return savedFiles;

}

console.log(save([4, 4, 4, 3, 3], 11));