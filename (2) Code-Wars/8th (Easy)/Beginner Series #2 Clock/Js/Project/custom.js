function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}

// Example usage
let h = 0;
let m = 1;
let s = 1;
let result = past(h, m, s);
console.log(result);  // Output: 61000