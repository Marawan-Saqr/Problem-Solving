function addBook(library, book) {
  library.push(book);
  return library;
}

function searchBooks(library, searchTerm) {
  // Convert searchTerm to lowercase for case-insensitive comparison
  const lowerCaseTerm = searchTerm.toLowerCase();

  // Filter books where the title or author contains the search term
  return library.filter(
    (book) =>
      book.title.toLowerCase().includes(lowerCaseTerm) ||
      book.author.toLowerCase().includes(lowerCaseTerm)
  );
}

// Example usage:
let library = [];

// Add books to the library
library = addBook(library, { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 });
library = addBook(library, { title: "1984", author: "George Orwell", year: 1949 });
library = addBook(library, { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 });

// Search the library
console.log(searchBooks(library, "Harper")); // Should return the book by Harper Lee