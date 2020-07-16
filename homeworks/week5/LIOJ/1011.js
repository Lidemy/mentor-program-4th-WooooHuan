const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(arr) {
  const sum = arr.reduce((a, b) => a + b);
  return (sum / arr.length) >= 183 ? 'real' : 'fake';
}

function io(input) {
  const arr = input[1].split(' ').map(e => Number(e));
  console.log(solve(arr));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
