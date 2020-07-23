const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(arr) {
  let result = 1;
  let counter = 1;
  let lastSign = arr[0];

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] === lastSign) {
      counter += 1;
    } else {
      counter = 1;
      lastSign = arr[i];
    } result = Math.max(counter, result);
  } return result;
}

function io(input) {
  const [, ladder] = input;
  console.log(solve(ladder.split(' ')));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
