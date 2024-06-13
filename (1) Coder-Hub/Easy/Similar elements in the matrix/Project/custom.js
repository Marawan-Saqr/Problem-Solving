function get_duplicate_elements(arr) {

  let st = new Set();
  let result = [];

  arr.forEach(num => {
    if (st.has(num)) {
      result.push(num);
    } else {
      st.add(num);
    }
  })

  return result;

}

console.log(get_duplicate_elements([10, 5, 9, 5]));
