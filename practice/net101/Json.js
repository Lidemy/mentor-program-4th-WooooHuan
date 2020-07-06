const request = require('request');
const process = require('process');

request(
  'https://reqres.in/api/users',
  (error, response, body) => {
    const json = JSON.parse(body);
    console.log(json);
  }
);

const obj = {
  name: 'testName',
  job: 'testJob'
}

console.log(JSON.stringify(obj));
