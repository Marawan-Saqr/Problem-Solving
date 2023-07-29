function solution(a, b){
  if (a.length > b.length) {
    return b + a + b;
  } else if (b.length > a.length) {
    return a + b + a;
  }
}



console.log(solution("Me", "Soon"));