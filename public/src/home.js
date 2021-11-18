function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const result = books.filter(book => !book.borrows[0].returned);
  return result.length;
}

function getMostCommonGenres(books) {
  const genres = books.map(book => book.genre);
  let result = [];
  genres.forEach( genre => {
    const resultObj = { name: genre, count: 1};
    if(result.find(r => r.name === genre)){
      const found = result.find(r => r.name === genre);
      const i = result.indexOf(found);
      result[i].count++;
    } else {
      result.push(resultObj);
    }
  });
  result.sort( (genre1, genre2) => genre1.count > genre2.count ? -1 : 1 );
  if(result.length > 5){
    result = result.slice(0, 5);
  }
  return result;
}

function getMostPopularBooks(books) {
  const sorted = books.sort((book1, book2) => book1.borrows.length > book2.borrows.length ? -1 : 1);
  let result = [];
  sorted.forEach(book => {
    result.push({ name : book.title, count: book.borrows.length });
  });
  if(result.length > 5){
    result = result.slice(0, 5);
  }
  return result;
}

function getMostPopularAuthors(books, authors) {
  const sorted = books.sort((book1, book2) => book1.borrows.length > book2.borrows.length ? -1 : 1);
  let result = [];
  sorted.forEach(book => {
    const author = authors.find(author => author.id === book.authorId);
    const authorName = `${author.name.first} ${author.name.last}`;
    result.push({ name: authorName, count: book.borrows.length });
  });
  if(result.length > 5){
    result = result.slice(0, 5);
  }
  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
