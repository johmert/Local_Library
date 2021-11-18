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

function reduceOutputToFiveResults(input){
  let result = input;
  if(input.length > 5){
    result = input.slice(0, 5);
  }
  return result;
}

function getMostCommonGenres(books) {
  const callback = (acc, bookObj) => {
    const genre = bookObj.genre;
    const genreIndex = acc.findIndex(book => book.name === bookObj.genre);
    if (genreIndex >= 0){
      acc[genreIndex].count++;
    } else {
      acc.push({ name : genre, count: 1});
    }
    return acc;
  }
  let result = books.reduce(callback, []);
  result.sort( (genre1, genre2) => genre1.count > genre2.count ? -1 : 1 );
  result = reduceOutputToFiveResults(result);
  return result;
}

function getMostPopularBooks(books) {
  const sorted = books.sort((book1, book2) => book1.borrows.length > book2.borrows.length ? -1 : 1);
  let result = [];
  sorted.forEach(book => {
    result.push({ name : book.title, count: book.borrows.length });
  }); 
  result = reduceOutputToFiveResults(result);
  return result;
}

function getMostPopularAuthors(books, authors) {
  const sorted = books.sort((book1, book2) => book1.borrows.length > book2.borrows.length ? -1 : 1);
  let result = [];
  sorted.forEach(book => {
    const author = authors.find(author => author.id === book.authorId);
    const name = `${author.name.first} ${author.name.last}`;
    const count = book.borrows.length;
    const resultObj = { name, count };
    result.push(resultObj);
  });
  result = reduceOutputToFiveResults(result);
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
