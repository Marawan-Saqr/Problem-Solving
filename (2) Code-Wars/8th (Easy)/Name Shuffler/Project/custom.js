function nameShuffler(str){
  let splited = str.split(" ");
  return splited.reverse().join(" ");
}

console.log(nameShuffler("john McClane"));