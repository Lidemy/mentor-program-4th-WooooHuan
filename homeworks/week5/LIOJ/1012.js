const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(a, b) {
  const maxPrice = Math.max(a, b) * 2;
  console.log(maxPrice);
  console.log(maxPrice - (a + b));
}

function io(input) {
  const arr = input.map(e => Number(e));
  solve(arr[0], arr[1]);
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
