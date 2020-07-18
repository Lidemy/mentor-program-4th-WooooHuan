const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(arr) {
  let result = 0;
  let n = 0;
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i; j < arr.length; j += 1) {
      n += arr[j];
      if (n > result) result = n;
    }
    n = 0;
  } return result;
}

function io(input) {
  const [, ...arr] = input;
  console.log(solve(arr.map(x => Number(x))));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
