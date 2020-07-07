const request = require('request');

const baseUrl = 'https://lidemy-book-store.herokuapp.com';

request(
  `${baseUrl}/books?_limit=10`,
  (error, response, body) => {
    const books = JSON.parse(body);
    books.forEach(book => console.log(`${book.id} ${book.name}`));
  },
);
