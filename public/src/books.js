function findAuthorById(authors, id) {
  const result = authors.find(author => author.id === id);
  return result;
}

function findBookById(books, id) {
  const result = books.find(book => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
