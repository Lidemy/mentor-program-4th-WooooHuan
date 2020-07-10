/* eslint-disable no-unused-vars */
const request = require('request');
const process = require('process');

const baseUrl = 'https://lidemy-book-store.herokuapp.com/books';
const unAcErr = 'Error: Unacceptable parameters!';
const reqErr = 'Request error!';
const input = process.argv.slice(2);

function isNaturalNumber(str) {
  return /^[0-9]*[1-9][0-9]*$/.test(str);
}

function list() {
  request.get(`${baseUrl}?_limit=20`, (error, response, body) => {
    if (error || response.statusCode >= 400) { console.log(reqErr); return; }
    JSON.parse(body).forEach(book => console.log(`${book.id} ${book.name}`));
  });
}

function read() {
  const id = input[1];
  if (!isNaturalNumber(id)) { console.log(unAcErr); return; }
  request.get(`${baseUrl}/${id}`, (error, response, body) => {
    if (error || response.statusCode >= 400) { console.log(reqErr); return; }
    console.log(JSON.parse(body).name ? JSON.parse(body).name : 'Not exist.');
  });
}

function del() {
  const id = input[1];
  if (!isNaturalNumber(id)) { console.log(unAcErr); return; }
  request.delete(`${baseUrl}/${id}`, (error, response, body) => {
    if (error || response.statusCode >= 400) { console.log(reqErr); return; }
    console.log(`Now the book that id is ${id} has been deleted.`);
  });
}

function create() {
  const name = input[1];
  if (!name) { console.log(unAcErr); return; }
  request.post({
    url: baseUrl,
    form: { name },
  },
  (error, response, body) => {
    if (error || response.statusCode >= 400) { console.log(reqErr); return; }
    console.log(`Now the book named "${name}" has been created.`);
  });
}

function update() {
  const id = input[1];
  const name = input[2];
  if (!name || !isNaturalNumber(id)) { console.log(unAcErr); return; }
  request.patch({
    url: `${baseUrl}/${id}`,
    form: { name },
  },
  (error, response, body) => {
    if (error || response.statusCode >= 400) { console.log(reqErr); return; }
    if (!JSON.parse(body).name) { console.log('Not exist.'); return; }
    console.log(`Now the book that id is ${id} has been renamed to "${name}".`);
  });
}

function main() {
  switch (input[0]) {
    case 'list': list(); break;
    case 'read': read(); break;
    case 'delete': del(); break;
    case 'create': create(); break;
    case 'update': update(); break;
    default: console.log('Error: Command does not exist!');
  }
}

main();
