function solution(str){
  let reversed = str.split("").reverse().join("");
  return reversed;
}

console.log(solution("world"));