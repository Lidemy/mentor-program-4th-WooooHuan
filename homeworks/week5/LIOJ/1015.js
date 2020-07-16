const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin });
const lines = [];
const speed = 340;

function solve(n) {
  return n * speed;
}

function io(input) {
  console.log(solve(Number(input[0])));
}

rl.on('line', line => lines.push(line));
rl.on('close', () => io(lines));
