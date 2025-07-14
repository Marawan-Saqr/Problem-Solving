function solution(a, b) {

  if (a.length > b.length) {
    return `${b}${a}${b}`;
  } else {
    return `${a}${b}${a}`;
  }

}

console.log(solution("45", "1"));