const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(str) {
  let result = 0;
  for (let i = 0; i < str.length; i += 1) {
    result += Number(str[i]) * (9 ** (str.length - (i + 1)));
  } return result;
}

function io(input) {
  console.log(solve(input[0]));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
