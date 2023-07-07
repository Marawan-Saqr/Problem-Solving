function isMirrored(num) {
  let mod = (num).toString();
  let start = 0;
  let end = mod.length - 1;
  while(start <= end) {
    if (mod[start] !== mod[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}


console.log(isMirrored(16461));


















