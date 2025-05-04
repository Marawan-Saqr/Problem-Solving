let book = {
  title: "American Academy",
  author: "John Value",
  pages: 330,
  isAvailable: true,
  borrowBook: function () {
    if (book.isAvailable === true) {
      book.isAvailable = false;
      return `You have borrowed the book ${book.title} by ${book.author}`;
    } else {
      return `Sorry, the book ${book.title} by ${book.author} is not available`;
    }
  },
};


console.log(book.borrowBook());


