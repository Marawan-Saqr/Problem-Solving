function getCurrentTime() {

  let currentDate = new Date();
  
  let year = currentDate.getFullYear();
  let month = String(currentDate.getMonth() + 1);
  let date = String(currentDate.getDate());
  let hours = String(currentDate.getHours());
  let minutes = String(currentDate.getMinutes());
  let seconds = String(currentDate.getSeconds());

  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;

}

console.log(getCurrentTime());