const request = require('request');

const reqErr = 'Request error!';

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    if (error) { console.log(reqErr); return; }
    const books = JSON.parse(body);
    books.forEach(book => console.log(`${book.id} ${book.name}`));
  },
);
