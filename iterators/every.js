/* Every book in the array of objects has more than 200 pages?
 */

const booksStock = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
    { title: '1984', author: 'George Orwell', pages: 328 },
    { title: 'Pride and Prejudice', author: 'Jane Austen', pages: 432 },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 224 }
  ];

const hasMoreThan200Pages = (books) => {
    const bookPages = books.map((book) => {
        return book.pages
    });
    return bookPages.every(pages => pages > 200);
}

console.log(hasMoreThan200Pages(booksStock));

