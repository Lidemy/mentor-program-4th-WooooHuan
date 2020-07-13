const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (error, response, body) => {
    if (error || response.statusCode >= 400) { console.log('Request error!'); return; }
    const books = JSON.parse(body);
    books.forEach(book => console.log(`${book.id} ${book.name}`));
  },
);
