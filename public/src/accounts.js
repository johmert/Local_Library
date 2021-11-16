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
  // use reduce method
}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
