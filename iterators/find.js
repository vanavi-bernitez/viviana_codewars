/* Find a book with a specific title and return the publication year  */

const bookStock = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }  
  ];

const findPublicationYearByTitle = (books, bookTitles) => {
    const bookYear = bookTitles.map((searchTitle) => {
        const book = books.find((book) => {
            return book.title === searchTitle;
        });    
        return book ? `Year: ${book.year}` : 'No match found';
    });
    return bookYear;
}

const booksTitles = ['1984', 'Mockingbird', 'The Hobbit'];
console.log(findPublicationYearByTitle(bookStock, booksTitles));

