function diamond(n) {

  if (n % 2 === 0 || n <= 0) {
    return null;
  }

  let result = "";

  for (let i = 1; i <= n; i += 2) {
    let spaces = " ".repeat((n - i) / 2);
    result += `${spaces}${"*".repeat(i)}\n`;
  }


  for (let j = n - 2; j >= 1; j -= 2) {
    let spaces = " ".repeat((n - j) / 2);
    result += `${spaces}${"*".repeat(j)}\n`;
  }

  return result;

}

console.log(diamond(7));