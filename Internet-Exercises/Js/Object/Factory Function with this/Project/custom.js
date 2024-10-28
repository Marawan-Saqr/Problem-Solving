function createMovie(title, director, year) {
  return {
    title: title,
    director: director,
    year: year,
    getInfo: function() {
      console.log(`Title: ${this.title}, Director: ${this.director}, Year: ${this.year}`);
    }
  };
}

// Creating two movie objects
const movie1 = createMovie("Inception", "Christopher Nolan", 2010);
const movie2 = createMovie("The Shawshank Redemption", "Frank Darabont", 1994);

// Logging their info
movie1.getInfo();
movie2.getInfo();