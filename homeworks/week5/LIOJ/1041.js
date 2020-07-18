const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];

function solve(str) {
  return str.trim();
}

function io(input) {
  console.log(solve(input[0]));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
