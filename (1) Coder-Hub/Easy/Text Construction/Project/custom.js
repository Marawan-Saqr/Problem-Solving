function string_builder(expression) {
  // write your code here
let stack = [];
let curr_str = '';
let curr_num = 0;
for (let i = 0; i < expression.length; i++) {
  let c = expression.charAt(i);
  if (/\d/.test(c)) {
    curr_num = curr_num * 10 + parseInt(c);
  } else if (c === '[') {
    stack.push([curr_str, curr_num]);
    curr_str = '';
    curr_num = 0;
  } else if (c === ']') {
    let [prev_str, prev_num] = stack.pop();
    curr_str = prev_str + curr_str.repeat(prev_num);
  } else {
    curr_str += c;
  }
}
return curr_str;
}