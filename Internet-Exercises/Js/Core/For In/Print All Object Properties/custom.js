const book = {
  title: "Blue Sky",
  author: "Osama Mohmed",
  year: 1997
}

for (let item in book) {
  console.log(`The Book ${item} Is => ${book[item]}`);
}
