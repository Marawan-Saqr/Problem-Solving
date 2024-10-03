function save(sizes, hd) {

  let result = 0;
  let savedFiles = 0;

  for (let i = 0; i < sizes.length; i++) {
    result += sizes[i];
    if (result === hd) {
      savedFiles++;
      break;

    } else if (result > hd) {
      break;
    }

    else if (result < hd ) {
      savedFiles++;
    }
  }

  return savedFiles;

}

console.log(save([4, 8, 15, 16, 23, 42], 108));