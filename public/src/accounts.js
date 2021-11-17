function findAccountById(accounts, id) {
  const result = accounts.find(account => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((account1, account2) => 
    account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 1 : -1);
  return result;
}

function getTotalNumberOfBorrows(account, books) {
  const id = account.id;
  let result = 0;
  books.forEach(book => {
    const borrows = book.borrows;
    
    /* const callback = (prev, current) => {
      if(current.id === id) {
        return prev + 1;
      } else {
        return prev;
      }
    }
    result += borrows.reduce(callback, 0); */
    
    borrows.forEach(borrow => {
      if(borrow.id === id){
        result++;
      }
    });
  });
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
