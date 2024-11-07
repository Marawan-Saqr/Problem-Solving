function reverseLetter(str) {

  return str.replace(/[^a-zA-Z]/g, '').split("").reverse().join("");

}


console.log(reverseLetter("ozyd#9jd$lkvse(5l?* srvr[wtlauxtzrudverawy"));