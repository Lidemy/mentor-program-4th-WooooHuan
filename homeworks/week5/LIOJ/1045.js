const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(str, from, end) {
  return str.slice(from, end);
}

function io(input) {
  const [str, from, end] = input;
  console.log(solve(str, from, end));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
