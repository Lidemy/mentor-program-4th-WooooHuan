const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(n, symbol = '*') {
  let result = symbol;
  for (let i = 2; i <= n; i += 1) {
    result += `\n ${symbol.repeat(i)}`;
  }
  console.log(result);
}

function input(inputInfo) {
  solve(parseInt(inputInfo, 10));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => input(lines));
