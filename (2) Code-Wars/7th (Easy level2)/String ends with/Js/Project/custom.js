function solution(str, ending) {

  for (let i = 0; i < ending.length; i++) {
    if (str[str.length - 1 - i] !== ending[ending.length - 1 - i]) {
      return false;
    }
  }

  return true;

}


console.log(solution("strden", "sdsds"));