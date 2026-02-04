function solution(a, b) {

  let firstLength = a.length;
  let secondLength = b.length;

  if (firstLength > secondLength) {
    return `${b}${a}${b}`;
  } else {
    return `${a}${b}${a}`;
  }

}

console.log(solution("45", "1"));