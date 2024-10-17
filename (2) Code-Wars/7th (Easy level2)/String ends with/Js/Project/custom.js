function solution(str, ending) {

  if (str.endsWith(ending)) {
    return true;
  }

  return false;

}


console.log(solution("abcde", "cde"));