function get_duplicate_elements(arr) {
  const duplicates = [];
const count = {};

for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  count[num] = count[num] ? count[num] + 1 : 1;
  if (count[num] === 2) {
    duplicates.push(num);
  }
}

return duplicates;

}

console.log(get_duplicate_elements([1, 2, 4, 2, 5]));