function findAuthorById(authors, id) {
  const result = authors.find(author => author.id === id);
  return result;
}

function findBookById(books, id) {
  const result = books.find(book => book.id === id);
  return result;
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter(book => !book.borrows[0].returned);
  const returned = books.filter(book => book.borrows[0].returned);
  return [checkedOut, returned];
}

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;
  let result = [];
  borrows.forEach(borrow => {
    const id = borrow.id;
    const returned = borrow.returned;
    const account = accounts.find(acc => acc.id === id);
    account.returned = returned;
    result.push(account);
  });
  while(result.length > 10) {
    result.pop();
  }
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
