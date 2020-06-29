const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(n, symbol = '*') {
  let result = symbol;
  for (let i = 2; i <= n; i += 1) {
    result += `\n${symbol.repeat(i)}`;
  }
  return (result);
}

function io(input) {
  console.log(solve(parseInt(input[0], 10)));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
