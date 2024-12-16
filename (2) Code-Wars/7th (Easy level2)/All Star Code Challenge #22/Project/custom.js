function toTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  return `${hours} hour(s) and ${minutes} minute(s)`;
}

console.log(toTime(3500));