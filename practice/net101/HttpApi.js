const request = require('request');
const process = require('process');

/* request(
  'https://reqres.in/api/users',
  (error, response, body) => console.log(body)
); */

request(
  'https://reqres.in/api/users/689',
  (error, response, body) => console.log(body)
);

/* request(
  `https://reqres.in/api/users/${process.argv[2]}`,
  (error, response, body) => console.log(body),
); */

/*request.post(
  {
    url:'https://reqres.in/api/users',
    form: {
      name:'TestName',
      job:'TestJob',
    },
  },
  (error, response, body) => console.log(body),
)*/