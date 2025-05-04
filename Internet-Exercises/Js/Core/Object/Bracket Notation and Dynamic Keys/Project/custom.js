const library = {
  books: [
    {
      title: "C++ Book",
      author: "Osama Elzero",
      getDetails: function() {
        return `The Title Of Book Is ${this.title} And His Author Is ${this.author}`;
      }
    },
    {
      title: "JS Book",
      author: "Ahmed Abo Zied",
      getDetails: function() {
        return `The Title Of Book Is ${this.title} And His Author Is ${this.author}`;
      }
    },
    {
      title: "HTML Book",
      author: "Marawan Saqr",
      getDetails: function() {
        return `The Title Of Book Is ${this.title} And His Author Is ${this.author}`;
      }
    },
  ]
}

library.books.forEach(book => {
  console.log(book.getDetails());
})