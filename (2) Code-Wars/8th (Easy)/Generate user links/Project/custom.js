function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}

console.log(generateLink("_Pdl%2F%40~~%3Ap"));